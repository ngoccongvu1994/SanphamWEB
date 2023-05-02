export interface CategoryProductModel {
  _id: string;
  name: string ;
  code: string;
  description: string;
  parent_id?: string;
  level: Number;
}
