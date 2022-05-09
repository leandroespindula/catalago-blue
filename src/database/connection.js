import Sequelize from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

export const connection = new Sequelize(
    'postgres://carros_user:leM6COIAu3W91E9FrfDxixWAf6rF0jbD@dpg-c9s80n7h8vl9mld2qvt0-a/carros',
    {
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
)