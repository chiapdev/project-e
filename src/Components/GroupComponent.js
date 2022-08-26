import React, { useState } from 'react';
import Parse from 'parse/dist/parse.min.js';

export const GroupComponent = () => {
    // State variables
    const [group, setGroup] = useState(null);

    async function addGroup() {
        try {
            // create a new Parse Object instance
            const Group = new Parse.Object('Group');
            // define the attributes you want for your Object
            Group.set('description', 'Coglioni');
            Group.set('preferredDay', 1);
            // save it on Back4App Data Store
            await Group.save();
            alert('Group saved!');
        } catch (error) {
            console.log('Error saving new group: ', error);
        }
    }

    async function fetchGroup() {
        // create your Parse Query using the Group Class you've created
        const query = new Parse.Query('Group');
        // use the equalTo filter to look for user which the name is John. this filter can be used in any data type
        query.equalTo('description', 'Coglioni');
        // run the query
        const Group = await query.first();
        // access the Parse Object attributes
        console.log('group description: ', Group.get('description'));
        console.log('group preferred day: ', Group.get('preferredDay'));
        console.log('group id: ', Group.id);
        setGroup(Group);
    }

    return (
        <div>
            <button onClick={addGroup}>Add Group</button>
            <button onClick={fetchGroup}>Fetch Group</button>
            {group !== null && (
                <div>
                    <p>{`Name: ${group.get('description')}`}</p>
                    <p>{`Email: ${group.get('preferredDay')}`}</p>
                </div>
            )}
        </div>
    );
};