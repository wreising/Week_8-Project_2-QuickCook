const Sequelize = require("sequelize");
const sequelize = require("..config/index");
const bcrypt = require("bcrypt");

const Customer = sequelize.define("customer", {
  id: {
    type: Sequelize.INTEGER,
    field: 'customer_id',
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    field: 'customer_name'
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    field: 'customer_email',
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    field: 'customer_password',
    allowNull: true,
  },
  {
    hooks: {
      beforeCreate: async (customer) => {
        if(customer.password) {
          const salt = await bcrypt.genSaltSync(10, 'a');
          customer.password = bcrypt.hashSync (user.password, salt);
        }
      },
      beforeUpdate: async (customer) => {
        if (user.password) {
          const salt = await bcrypt.genSaltSync(10,'a');
        }
      }  
    },
    instanceMethods: {
      validPassword: (password, this.password);
    }
  }
});
Customer.prototype.validPassword = async (password, hash) => {
  return await bcrypt.compareSync (password, hash);
}
return customer;
}

const authenticateCustomerWithemail = (customer) => {
  return new Promise ((resolve, reject) => {
    try {
      user.model.findOne ({
        where: {
          customer_email: customer.customerName
        }
      })
      .then(async (response) => {
        if (!response) {
          resolve(false);
        } else{
          if (!response.dataValues.password || !await response.validPassword(customer.password, response.dataValues.password)) {
            resolve (false);
          }else {
            resolve(response.dataValues)
          }
        }
      })
    } catch (error) {
      const response = {
        status: 500,
        data: {},
        error: {
          message: "Could not find Customer"
        }
      };
      reject(response);
    }
  })
} 