import React, { Component } from 'react';
import get from 'lodash/get';
import { observer, inject } from 'mobx-react';
import { formatter } from '@lskjs/utils/formatter';
import { contextToProps } from './List.context';

@contextToProps('List', 'show', 'FilterForm')
@inject('listStore', 'i18')
@observer
class ListSearch extends Component {
  render() {
    const {
      i18, List, listStore, show, ...props
    } = this.props;
    return (
      <List.SearchWrapper>
        <List.SearchComponent
          current={listStore.items.length}
          max={formatter(listStore.count)}
          debounceTimeout={100}
          onChange={e => listStore.setSearch(get(e, 'target.value', e))}
          value={listStore.search || ''}
          canClear={!!listStore.search}
          onClear={() => listStore.setSearch(null)}
          actions={show.filterButton && <List.FilterButton />}
          placeholder={i18.t('lskList.searchPlaceholder')}
          {...props}
        />
      </List.SearchWrapper>
    );
  }
}


export default ListSearch;
