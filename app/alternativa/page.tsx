import { Button } from "@/components/ui/button"

export default function AlternativaPage() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-black text-white p-4 max-w-md mx-auto">
      {/* Título principal com o texto fornecido pelo usuário */}
      <h1 className="text-2xl font-bold text-center mb-6 mt-8">
        Use Absolutamente De Graça O Método Copy Cash Que Tá Gerando De R$300 A R$1.250/Mês Mesmo Para Iniciantes No
        Mercado Financeiro.
      </h1>

      {/* Espaço para foto */}
      <div className="w-full h-64 bg-gray-800 flex items-center justify-center rounded-lg mb-6">
        <p className="text-gray-400">[FOTO]</p>
      </div>

      {/* Texto Telegram */}
      <p className="text-center mb-4">Comunidade no Telegram</p>

      {/* Botão de ação */}
      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md text-lg mb-4">
        ENTRAR NO GRUPO
      </Button>

      {/* Texto abaixo do botão */}
      <p className="text-center text-sm mb-8">
        Clique no botão acima e entre no
        <br />
        grupo gratuito do Telegram
      </p>

      {/* Benefícios */}
      <div className="w-full space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-green-500">✔</span>
          <p className="text-sm">Para iniciantes e quem já opera.</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-green-500">✔</span>
          <p className="text-sm">Operações ao vivo todo dia.</p>
        </div>
      </div>
    </div>
  )
}
