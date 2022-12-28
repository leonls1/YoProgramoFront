
class ClaseNueva{

  private atributo1: string;
  private atributo2: number;
  protected atributo3: number;
 //constructor
 public Constructor()
 {
  this.atributo1 = "patito";
  this.atributo2 = 10;
  this.atributo3 = 99;
 }
 
  // metodos de acceso
 private Atributo1(): string
 {
  return this.atributo1
 }
 
 private Atributo2(): number
 {
   return this.atributo2
 }

 private Atributo3() :number
 {
   return this.atributo3;
 }

//metodos propios o funciones

public Metodo1() :number
{
  return this.atributo2 + this.atributo3 ;
}

public Metodo1Sobreacargado(numero:number) :number
{
  return this.Metodo1() + numero;
}
}