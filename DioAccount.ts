export abstract class DioAccount{
 private name:string
readonly accountNumber:number
  balance: number = 0
 private status: boolean = true

  constructor(name:string,accountNumber:number){
    this.name = name
    this.accountNumber = accountNumber
  }
  setName = (name:string):void => {
    this.name = name
    console.log('Nome alterado com sucesso')
  }

getName = ():string => {
  return this.name
}

  deposit = ():void => {
    if (this.validateStatus()){
      console.log('Voce depositou')
    }
  }
  withdraw = ():void => {
    console.log('Voce sacou')
  }
  getBalance = ():void => {
    console.log(this.balance)
  }
  validateStatus = ():boolean => {
    if(this.status) {
      return this.status
    }

  throw new Error('conta invalida')
  }
}



class Admin extends DioAccount {
  balance: number
  
  constructor(name:string,accountNumber:number){
    super(name,accountNumber)
    this.balance = 20
  }

}