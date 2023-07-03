import { createSlice } from '@reduxjs/toolkit'

export const bankSlice = createSlice({
  name: 'bank',
  initialState: {
    accounts : [
        {
          id: 1,
          customerName:"Israa Othman",
          accountNumber: "123456",
          accountType: "Savings"
        },
        {
          id: 2,
          customerName:"Ahmad Zahran",
          accountNumber: "987654",
          accountType: "Student accounts"
        }
],
numberOfAccounts : 2 

  },
  reducers: {
   
    addAccount: (state , action)=>{
        const { id, customerName, accountNumber, accountType } = action.payload;
        const newAccount = {
            id: id,
            customerName: customerName,
            accountNumber: accountNumber,
            accountType: accountType
            };
            state.accounts.push(newAccount);
            state.numberOfAccounts += 1;
    },
    deleteAccount: (state , action) =>{
        const id = action.payload;
        console.log("id:",id);
        state.accounts = state.accounts.filter((account)=> account.id !== id);
        state.numberOfAccounts -= 1;
    }
  },
})

// Action creators are generated for each case reducer function
export const {addAccount , deleteAccount} = bankSlice.actions;

export default bankSlice.reducer;