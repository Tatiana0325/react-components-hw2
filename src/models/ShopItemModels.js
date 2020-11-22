import { v4 as uuidv4 } from "uuid";

export default class ShopItemModels {
  constructor(brand, title, description, descriptionFull, price, currency) {
    this.id = uuidv4();
    this.brand = brand;
    this.title = title;
    this.description = description;
    this.descriptionFull = descriptionFull;
    this.price = price;
    this.currency = currency;
  }
}
