export interface ISubAccountContract {
  name: string;
  email: string;
  cpfCnpj: string;
  birthDate: string; // Data de nascimento (somente quando Pessoa Física)
  mobilePhone: string;
  companyType: string;
  incomeValue: number;
  address: string;
  addressNumber: string;
  province: string;
  postalCode: string;
}

export interface ISubAccountResponse {
  id: string; // Identificador único da subconta no Asaas
  name: string; // Nome da subconta
  email: string; // Email da subconta
  loginEmail?: string; // Email para login da subconta, opcional
  phone?: string; // Telefone Fixo
  mobilePhone?: string; // Telefone Celular
  address: string; // Logradouro
  addressNumber: string; // Número do endereço
  complement?: string; // Complemento do endereço
  province: string; // Bairro
  postalCode: string; // CEP do endereço
  cpfCnpj: string; // CPF ou CNPJ do proprietário da subconta
  birthDate?: string; // Data de nascimento (somente quando Pessoa Física)
  personType: 'JURIDICA' | 'FISICA'; // Tipo de Pessoa
  companyType?: 'MEI' | 'LIMITED' | 'INDIVIDUAL' | 'ASSOCIATION'; // Tipo da empresa (Pessoa Jurídica)
  city?: number; // Identificador único da cidade no Asaas
  state: string; // Sigla do Estado
  country: string; // País (Fixo Brasil)
  tradingName?: string; // Nome de exibição
  site?: string; // URL do site da subconta
  walletId: string; // Identificador único da wallet
  accountNumber?: {
    agency: string;
    account: string;
    accountDigit: string;
  };
  commercialInfoExpiration?: {
    isExpired: boolean;
    scheduledDate: string; // date-time
  };
  apiKey: string; // Chave de API
}
