import React from 'react';
import {Company} from '../company/company.component';

export const CompanyList = props => (
    <div>
        <table>
        <thead>
            <tr>
                <th> Id </th>
                <th> Name </th>
                <th> City </th>
                <th> Total income </th>
            </tr>
        </thead>
    </table>
        {props.companies.map(item => (
            <Company key={item.id} company={item}/>
        ))}
    </div>
)