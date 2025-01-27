import { Canister, jsonStringify, query, text } from 'azle';

export default Canister({
    greet: query([text], text, (name) => {
        return `Hello, ${name}!`;
    }),

    login: query([text, text], text, (name, pass) => {
        return jsonStringify({
            data:{
                user_id:"1",
                user_profile_name:"SkuyDev Kosan",
                detail:{
                    profile_filled:true,
                    profile_detail:{
                        username:"SkuyDev",
                        password:"SkutDev01",
                        rent_status:false,
                        address:"Sei Batang Hari street No. 1",
                        email:"SkuyDev@devmail.id",
                        register_credential:"SkuyDev",
                    },
                }
            },
            status:200,
        });
    })
})
