export class Vaga {
  //atributos
  // private id:number;
  // private nome:string;
  // private foto:string;
  // private descricao: string;
  // private salario:number;

  // constructor(id:number, nome:string, foto:string, descricao:string, salario:number ){
  //   this.id = id,
  //   this.nome = nome,
  //   this.foto = foto,
  //   this.descricao = descricao;
  //   this.salario = salario
  // }

  // metodo abreviado de criação de uma classe
  constructor(
    public id: number,
    public nome: string,
    public foto: string,
    public descricao: string,
    public salario: number
  ) {}

  // // métodos publicos( get set)
  // public get salario(): number {
  //   return this._salario;
  // }
  // //nome do método(parâmetro)
  // public set salario(value: number) {
  //   this._salario = value;
  // }
  // public get descricao(): string {
  //   return this._descricao;
  // }
  // public set descricao(value: string) {
  //   this._descricao = value;
  // }
  // public get foto(): string {
  //   return this._foto;
  // }
  // public set foto(value: string) {
  //   this._foto = value;
  // }
  // public get nome(): string {
  //   return this._nome;
  // }
  // public set nome(value: string) {
  //   this._nome = value;
  // }
  // public get id(): number {
  //   return this._id;
  // }
  // public set id(value: number) {
  //   this._id = value;
  // }

  // //conversão OBJ <=> obj
  // //obj -> bd
  // toMap(): { [key: string]: any } {
  //   return {
  //     id: this.id,
  //     nome: this.nome,
  //     foto: this.foto,
  //     descricao: this.descricao,
  //     salario: this.salario,
  //   };
  // }
  // //fromMap : BD => obj
  // static fromMap(map: any): Vaga {
  //   return new Vaga(map.id, map.nome, map.foto, map.descricao, map.salario);
  // }
}
