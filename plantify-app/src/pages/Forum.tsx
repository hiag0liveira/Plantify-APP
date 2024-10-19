
import background from '../assets/forum/fundoforum.png'
import ana from '../assets/forum/ana.png'
import antonio from '../assets/forum/antonio.png'
import geralda from '../assets/forum/geralda.png'
import jose from '../assets/forum/jose.png'
import topicosalta from '../assets/forum/topicosalta.png'
import hashtagalta from '../assets/forum/hashtagsalta.png'
import search from '../assets/quermesse/search.svg'



const posts = [
  {
    id: 1,
    author: 'José Roberto Teixeira Nunes',
    avatar: jose,
    content: 'Bom dia. Alguém sabe algum fungicida bom para controle num milharal?',
    tags: ['#fungicida', '#milho', '#dúvida', '#lavoura'],
    responses: 7,
  },
  {
    id: 2,
    author: 'Ana Claudia Faria',
    avatar: ana,
    content: 'Ola sou nova no mundo do cultivo de soja rsrs e gostaria de saber se a melhor época para o plantio por favor...',
    tags: ['#plantio', '#soja', '#dúvidas', '#novata'],
    responses: 4,
  },
  {
    id: 3,
    author: 'Antonio Pereira',
    avatar: antonio,
    content: 'OLA MEU SOLO ESTA MUITO ACIDO QUE TIPO DE CALCARIO E BOM PRA APLICAR ACEITO SUGESTOES',
    tags: ['#solo', '#calcário'],
    responses: 9,
  },
  {
    id: 4,
    author: 'Geralda Castilho de Souza',
    avatar: geralda,
    content: 'Bom dia, quero saber onde posso achar magnésio aqui pelo Rio de Janeiro?',
    tags: ['#magnésio', '#solo', '#recomendação', '#ajuda', '#rio de janeiro'],
    responses: 3,
  },
];

const Forum = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="relative flex flex-col justify-center items-center h-80 -mt-2">
          <div
            className="relative flex flex-col items-center justify-center w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${background})`,
              backgroundPosition: 'top',
              backgroundSize: 'cover',
            }}
          >
            <div className="relative w-2/4 mx-auto">
              <input
                type="text"
                placeholder="Pesquisar um assunto ou tópico..."
                className="w-full bg-white rounded-lg border border-gray-300 py-2 px-4 pl-10 mb-2 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <img src={search} alt="Search" className="w-5 h-5 text-gray-500" />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <img src={topicosalta} alt="Tópicos em alta" className="w-3/4 h-3/4" />
              <img src={hashtagalta} alt="Hashtags em alta" className="w-3/4" />
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto mt-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-green-600 text-2xl font-bold mb-4">Postagens</h2>
          <div className="flex flex-row justify-end items-end">
            <button className="bg-white text-green-600 border border-green-500 font-bold  px-2 py-1 rounded-lg mr-2">
              Minhas postagens
            </button>
            <button className="bg-orange-500 text-white font-bold  px-2 py-1 rounded-lg">
              +Nota Mensagem
            </button>
          </div>
        </div>

        {posts.map((post) => (
          <div key={post.id} className="bg-white p-4 rounded-lg shadow-md mb-4">
            <div className="flex items-start">
              <img
                src={post.avatar}
                alt={post.author}
                className="rounded-full w-24 h-24 mr-4"
              />
              <div className="flex-grow">
                <div className="flex justify-between items-center">
                  <h3 className="text-green-600 font-semibold">{post.author}</h3>
                </div>
                <p className="text-gray-700 mt-2 font-bold">{post.content}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-orange-500">{post.responses} respostas</span>
                  <div className="flex gap-2 ml-4">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="bg-white text-orange-500 rounded-full px-1 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex gap-2 justify-end">
                  <button className="bg-gray-300 text-white font-bold  px-4 py-2 rounded-lg">Salvar</button>
                  <button className="bg-green-500 text-white font-bold  px-4 py-2 rounded-lg border border-green-500">Responder</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Forum;
