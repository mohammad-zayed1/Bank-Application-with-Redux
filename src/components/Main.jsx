import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAccount , deleteAccount } from "../bank/bankSlice";
import {AiOutlineDelete} from 'react-icons/ai';
export const Main = () => {
  const [info, setInfo] = useState({
    id:"",
    customerName: "",
    accountNumber: "",
    accountType: "",
  });
  const dispatch = useDispatch();
  const accounts = useSelector((state) => state.bank.accounts);
  const length = useSelector((state) => state.bank.numberOfAccounts);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prev) => ({
      ...prev,
      id:length + 1,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAccount(info));
  };
  const handleDelete = (id)=>{
    // e.preventDefault();
  dispatch(deleteAccount(id))

  }
  console.log(length);

  console.log(accounts);

  const tableRows = accounts.map((account, index) => {
    return (
      <tr key={account.id}>
        <th>{index + 1}</th>
        <td>{account.customerName}</td>
        <td>{account.accountNumber}</td>
        <td>{account.accountType}</td>
        <td><button type="button" onClick={()=> handleDelete(account.id)} className="btn btn-error text-black"><AiOutlineDelete /></button></td>
      </tr>
    );
  })
  return (
    <div className="h-screen p-8  flex flex-col">
      <div className="flex mb-5 gap-2">
       <h1 className="text-2xl font-bold">Total Accounts :{" "}</h1> 
        <div className="text-2xl animate-bounce">{length}</div>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead className="bg-[#2b3440] text-white">
            <tr>
              <th></th>
              <th>Customer Name</th>
              <th>Account Number</th>
              <th>Account Type</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tableRows.length === 0 ? <div className="p-2 text-lg">There are no Accounts </div> : tableRows}
            {/* row 1 */}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-5 ">
        <form
          action="#mm"
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-4  w-[400px] justify-center items-center "
        >
          <input
            type="text"
            name="customerName"
            value={info.customerName}
            onChange={handleChange}
            placeholder="Type here Customer Name"
            className="input input-bordered  max-w-xs"
          />
          <input
            type="text"
            name="accountNumber"
            value={info.accountNumber}
            onChange={handleChange}
            placeholder="Type here Account Number"
            className="input input-bordered  max-w-xs"
          />
          <select
            name="accountType"
            onChange={handleChange}
            value={info.accountType}
            className="select select-bordered  max-w-xs"
          >
            <option disabled selected>
              select account type
            </option>
            <option value="saving">Saving</option>
            <option value="student">Student </option>
          </select>
          <button className="btn btn-secondary  max-w-xs">add</button>
        </form>
      </div>
    </div>
  );
};
