export default class Url {
    constructor(
       public id: number,
       public long_url: string,
       public short_url: string,
       public created_at: any,
       public expired_at: any
    ) {
      this.id = id;
      this.long_url = long_url;
      this.short_url = short_url;
      this.created_at = created_at;
      this.expired_at = expired_at;
    }
  }