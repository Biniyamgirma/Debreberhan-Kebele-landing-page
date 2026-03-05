const { connectWithConnector } = require("../config/config");

const Pool = async()=>{
    try {
     const pool = await connectWithConnector();
     return pool;
    } catch (error) {
        console.log('connection error')
        throw error
    }
}

exports.default = Pool;