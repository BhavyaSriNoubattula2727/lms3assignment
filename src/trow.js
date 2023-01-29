import React from 'react';
import { faker } from '@faker-js/faker';
const Trow = ({name,resource,age}) => {
    return (
           <tr className="ui very basic collapsing celled table">
                        <td>
                            <h4 className="ui image header">
                                <img src={faker.image.avatar()} className="ui mini rounded image" alt="alt"/>
                                    <div className="content">
                                        {name}
                                        <div className="sub header">{resource}
                                        </div>
                                    </div>
                            </h4></td>
                        <td>
                            {age}
                        </td>
            </tr>
    );
};

export default Trow;
