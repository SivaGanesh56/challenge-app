import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import { useData } from '../store';

function imageFormatter(cell, row) {
    return (
        <img src={cell} alt="profile-picture" height={30} />
    );
}


const Table = () => {

    const [state, dispatch] = useData();

    const { SearchBar } = Search;

    function handleOnSelect(row, isSelect) {
        if (isSelect) {
            if (state.selectedPlayers.length >= 9) {
                alert("maximum players can't exceed by 9")
                return false;
            }
            dispatch({ type: 'selectPlayer', payload: row });
            return true;
        } else {
            const index = state.selectedPlayers.findIndex(item => item.id === row.id);
            state.selectedPlayers.splice(index, 1);
            dispatch({ type: 'updatePlayers', payload: state.selectedPlayers });
            return true;
        }
    }
    
    const selectRow = {
        mode: 'checkbox',
        clickToSelect: true,
        hideSelectAll: true,
        onSelect: handleOnSelect,
    };

    const columns = [{
        dataField: 'Profile Image',
        text: 'AVATAR',
        formatter: imageFormatter
      }, {
        dataField: 'Name',
        text: 'Profile Name',
        sort: true
      }, {
        dataField: 'Price',
        text: 'Price',
        sort: true
      },{
        dataField: 'Bet',
        text: 'Bet',
        sort: true
      }
    ];

    return (
        <div className="custom-table">

            <ToolkitProvider
                 columns={columns}
                 data={state.data}
                 keyField='id'
                 search
            >
            {
                props => (
                <div>
                    <SearchBar { ...props.searchProps } placeholder="Search Players..." />
                    <hr />
                    <BootstrapTable
                    { ...props.baseProps }
                    selectRow={selectRow}
                    pagination={ paginationFactory() }
                    striped
                    hover
                    condensed
                    bordered={ false }
                    />
                </div>
                )
            }
            </ToolkitProvider>
        </div>
    );
}

export default Table;
