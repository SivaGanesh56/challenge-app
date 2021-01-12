import React from 'react';
import BootstrapTable, { defaultSorted } from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { useData } from '../store';

function imageFormatter(cell, row) {
    return (
        <img src={cell} alt="profile-picture" height={30} />
    );
}


const Table = () => {

    const [state, dispatch] = useData();

    function handleOnSelect(row, isSelect) {
        if (isSelect) {
            if (state.selectedPlayers.length >= 9) {
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
      }, {
        dataField: 'Price',
        text: 'Price',
      },{
        dataField: 'Bet',
        text: 'Bet',
      }
    ];

    return (
        <div className="custom-table">
            <BootstrapTable
                columns={columns}
                data={state.data}
                keyField='id'
                bordered={ false }
                selectRow={selectRow}
                pagination={ paginationFactory() }
                striped
                hover
                condensed
            />
        </div>
    );
}

export default Table;
