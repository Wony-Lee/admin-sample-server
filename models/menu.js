const DataTypes = require('sequelize')
const { Model } = DataTypes;

module.exports = class Menu extends Model {
    static init(sequelize) {
        return super.init(
            {
                menuname: {
                    type: DataTypes.STRING(60),
                    allowNull: false,
                },
                content: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                description: {
                    type: DataTypes.TEXT
                }
            },
            {
                modelName: 'Menu',
                tableName: 'menulist',
                charset: "utf8mb4",
                collate: "utf8mb4_general_ci",
                sequelize
            }
        )
    }
}