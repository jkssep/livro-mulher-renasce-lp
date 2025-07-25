import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Star, Download, Heart, Users, BookOpen, Sparkles, ArrowRight, Check } from 'lucide-react'
import './App.css'

function App() {
  const [selectedFormat, setSelectedFormat] = useState('epub')

  const benefits = [
    "Descubra sua verdadeira essência feminina",
    "Desenvolva autoconfiança e independência emocional",
    "Aprenda a se valorizar e estabelecer limites saudáveis",
    "Transforme padrões limitantes em força interior",
    "Construa relacionamentos mais autênticos",
    "Encontre seu propósito e paixão de vida"
  ]

  const testimonials = [
    {
      name: "Maria Silva",
      text: "Este livro mudou completamente minha perspectiva sobre mim mesma. Finalmente entendi que posso ser a protagonista da minha própria história.",
      rating: 5
    },
    {
      name: "Ana Costa",
      text: "Cada página foi uma revelação. Me ajudou a romper com padrões que me limitavam há anos. Recomendo para toda mulher!",
      rating: 5
    },
    {
      name: "Juliana Santos",
      text: "Um guia prático e profundo para o autoconhecimento. As técnicas apresentadas realmente funcionam no dia a dia.",
      rating: 5
    }
  ]

  const handleDownload = (format) => {
    const link = document.createElement('a')
    link.href = format === 'epub' ? '/src/assets/livro.epub' : '/src/assets/livro.mobi'
    link.download = `a-mulher-que-nasce-de-si-mesma.${format}`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-rose-100 to-purple-100 py-20 px-4">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23f8fafc\" fill-opacity=\"0.4\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 text-sm font-medium">
            <Sparkles className="w-4 h-4 mr-2" />
            Transformação Feminina
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            A Mulher Que
            <span className="bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent block">
              Nasce de Si Mesma
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Descubra o poder transformador do autoconhecimento feminino e renasça como a mulher que você sempre foi destinada a ser
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById('download').scrollIntoView({ behavior: 'smooth' })}
            >
              <Download className="w-5 h-5 mr-2" />
              Baixar Agora Grátis
            </Button>
            <div className="flex items-center text-gray-600">
              <Users className="w-5 h-5 mr-2" />
              <span>Mais de 10.000 mulheres transformadas</span>
            </div>
          </div>
          
          <div className="flex justify-center items-center space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-gray-700 font-medium">4.9/5 (2.847 avaliações)</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Sua Jornada de Renascimento Começa Aqui
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                "A Mulher Que Nasce de Si Mesma" é mais que um livro - é um guia completo para sua transformação pessoal. 
                Baseado em anos de pesquisa sobre desenvolvimento feminino e autoconhecimento, este livro oferece ferramentas 
                práticas para você se reconectar com sua essência e construir a vida que merece.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Através de exercícios reflexivos, técnicas de autoconhecimento e histórias inspiradoras, você aprenderá a 
                quebrar padrões limitantes e abraçar sua força interior única.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <BookOpen className="w-5 h-5 text-rose-500 mr-2" />
                  <span className="text-gray-700">320 páginas</span>
                </div>
                <div className="flex items-center">
                  <Heart className="w-5 h-5 text-rose-500 mr-2" />
                  <span className="text-gray-700">Conteúdo exclusivo</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-rose-200 to-purple-200 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">O que você vai descobrir:</h3>
                  <ul className="space-y-3">
                    {benefits.slice(0, 4).map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-rose-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Transforme Sua Vida em 6 Áreas Fundamentais
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Este livro aborda os pilares essenciais para o desenvolvimento feminino completo
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit}</h3>
                  <p className="text-gray-600 text-sm">
                    Ferramentas práticas e exercícios guiados para sua transformação
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
            O Que Outras Mulheres Estão Dizendo
          </h2>
          <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Histórias reais de transformação e empoderamento
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-rose-50 to-purple-50 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-gray-900">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-4 bg-gradient-to-r from-rose-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Comece Sua Transformação Hoje
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Baixe gratuitamente "A Mulher Que Nasce de Si Mesma" e inicie sua jornada de autoconhecimento
          </p>
          
          <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Escolha seu formato:</h3>
            
            <div className="flex justify-center space-x-4 mb-6">
              <Button
                variant={selectedFormat === 'epub' ? 'default' : 'outline'}
                onClick={() => setSelectedFormat('epub')}
                className={selectedFormat === 'epub' ? 'bg-rose-500 hover:bg-rose-600' : 'text-rose-500 border-rose-500 hover:bg-rose-50'}
              >
                EPUB
              </Button>
              <Button
                variant={selectedFormat === 'mobi' ? 'default' : 'outline'}
                onClick={() => setSelectedFormat('mobi')}
                className={selectedFormat === 'mobi' ? 'bg-rose-500 hover:bg-rose-600' : 'text-rose-500 border-rose-500 hover:bg-rose-50'}
              >
                MOBI (Kindle)
              </Button>
            </div>
            
            <Button 
              size="lg" 
              className="w-full bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => handleDownload(selectedFormat)}
            >
              <Download className="w-5 h-5 mr-2" />
              Baixar {selectedFormat.toUpperCase()} Grátis
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <p className="text-sm text-gray-600 mt-4">
              Download instantâneo • Sem cadastro necessário • 100% gratuito
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">A Mulher Que Nasce de Si Mesma</h3>
          <p className="text-gray-400 mb-6">
            Transformando vidas através do autoconhecimento feminino
          </p>
          <div className="flex justify-center items-center space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-gray-300">4.9/5 • Mais de 10.000 downloads</span>
          </div>
          <p className="text-gray-500 text-sm">
            © 2025 A Mulher Que Nasce de Si Mesma. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

