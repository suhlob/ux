import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import autobind from 'core-decorators/lib/autobind';
import zip from 'lodash/zip';
import Button from '../Button';
import downloadExcel from '../utils/download';

class DownloadButton extends PureComponent {
  static propTypes = {
    listStore: PropTypes.object.isRequired,
    markup: PropTypes.array.isRequired,
    markupProps: PropTypes.object,
    downloadAll: PropTypes.bool,
    filename: PropTypes.string,
    limit: PropTypes.number,
    maxCount: PropTypes.number,
    children: PropTypes.any,
  }
  static defaultProps = {
    markupProps: {},
    downloadAll: false,
    filename: 'filename',
    limit: 50,
    maxCount: 10000,
    children: 'Download',
  }
  static markupToMatrix({ markup, items, props }) {
    return zip(...markup.map(([title, fn]) => {
      return [title, ...items.map(el => fn({ item: el, ...props }))];
    }));
  }
  @autobind
  async download() {
    return this.props.listStore.items;
  }
  @autobind
  async downloadAll() {
    const { listStore, limit, maxCount } = this.props;
    const listStoreAll = new listStore.constructor(listStore);
    const maxItemsCount = listStoreAll.count > maxCount ? maxCount : listStoreAll.count;
    await Promise.mapSeries(Array(Math.round(maxItemsCount / limit)).fill(), async () => {
      await listStoreAll.fetchMore(1, limit);
    });
    return listStoreAll.items;
  }
  @autobind
  async handleClick() {
    const { downloadAll, markup, markupProps } = this.props;
    const items = await (downloadAll ? this.downloadAll() : this.download());
    const data = DownloadButton.markupToMatrix({
      markup,
      props: markupProps,
      items,
    });
    downloadExcel({ name: this.props.filename, data });
  }
  render() {
    const { children, ...buttonProps } = this.props;
    return (<Button onClick={this.handleClick} paint="primary" {...buttonProps}>{children}</Button>);
  }
}

export default DownloadButton;