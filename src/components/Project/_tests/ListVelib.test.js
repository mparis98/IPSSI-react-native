import React from 'react';
import ListVelib from '../ListVelib';
import renderer from 'react-test-renderer';
import {MyContext} from "../actions/MyContext";


it('renders correctly', () => {
    const data = {
        data: {
            data: {
                nhits: 1,
                records: [{
                    fields: {
                        nbbike: 10,
                        nbebike: 4,
                        station_code: 11111,
                        station_name: 'Test Snapshot',
                        station_state: 'Operative'
                    }
                }]
            }
        }
    };

    const tree = renderer.create(<MyContext.Provider value={data}><ListVelib/></MyContext.Provider>).toJSON();
    expect(tree).toMatchSnapshot();
});
