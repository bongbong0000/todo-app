

const { v4: uuidv4 } = require('uuid');

export default{ 
			items: [
		      {
		      	id: uuidv4(),
		        name:"pay the bill",
		        level:2 // 0 :small, 1: medium, 2 :high
		        
		      },
		      {
		      	id:uuidv4(),
		        name:"Do my homework",
		        level:1 // 0 :small, 1: medium, 2 :high
		       
		      },
		      {
		      	id:uuidv4(),
		        name:"code project 1",
		        level:1 // 0 :small, 1: medium, 2 :high
		        
		      },
		       {
		      	id:uuidv4(),
		        name:"study eng",
		        level:2 // 0 :small, 1: medium, 2 :high
		        
		      },
		      
		      
		      ]
      }
