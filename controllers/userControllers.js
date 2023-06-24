import {con} from "../index.js";

export const login = async (req,res) =>{
    const {id, password} = req.body;
    console.log(req.body);
    let query=`SELECT * FROM auth WHERE id=${id}`;


    con.query(query, function (err, result) {
        if (err) throw err;
        if(result.length>0 && result[0].Password===password)
        {
            return res.status(200).json({message:"Login Successful",user:result});
        }
        else{
            return res.status(400).json({message:"Incorrect Password"});
        }
       
      });
}

export const getDetails = async (req,res) =>{
    const {id, orderDate,company,owner,item,quantity,weight,reqForShipment,trackingId,shipmentSize,boxCount,specification,checklistQuantity} = req.body;
    console.log(req.body);
    let query=`INSERT INTO details(ID, OrderDate, Company, Owner, Item, Quantity, Weight, RequestForShipment,TrackingID, ShipmentSize, BoxCount, Specification, ChecklistQuantity) VALUES (?)`;

    var values=[
        [id, orderDate,company,owner,item,quantity,weight,reqForShipment,trackingId,shipmentSize,boxCount,specification,checklistQuantity]
    ];
    con.query(query,values, function (err, result) {
        if (err) throw err;
        console.log(result);
        return res.status(200).json({message:"Details Saved Successfully"});
      });
}