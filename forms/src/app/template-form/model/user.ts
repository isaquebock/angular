export interface User {
  nome: String,
  email: String,
  endereco: {
    cep: Number | null,
    numero: Number | null,
    complemento: String,
    rua: String,
    bairro: String,
    cidade: String,
    estado: String
  }
}
