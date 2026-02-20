import { getImageUrl } from './utils.js';

const ratio = window.devicePixelRatio;

function Avatar({ person, size }) {
  let thumbnailSize = 's';
  if (size * ratio > 90) {
    thumbnailSize = 'b';
  }
  return (
    <img
      className="avatar"
      src={getImageUrl(person, thumbnailSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <>
      <Avatar
        size={40}
        person={{ 
          name: 'Gregorio Y. Zara', 
          imageId: '7vQD0fP'
        }}
      />
      <Avatar
        size={70}
        person={{ 
          name: 'Gregorio Y. Zara', 
          imageId: '7vQD0fP'
        }}
      />
      <Avatar
        size={120}
        person={{ 
          name: 'Gregorio Y. Zara', 
          imageId: '7vQD0fP'
        }}
      />
    </>
  );
}


// 📌 O que está acontecendo

// window.devicePixelRatio indica quantos pixels físicos existem para cada 1px CSS.

// Em telas comuns:

    // 1 CSS px = 1 pixel físico

    // Em telas Retina (ratio 2):

    // 1 CSS px = 2x2 = 4 pixels físicos

// O tamanho visual não muda.
// O que muda é quantos pixels reais são necessários para desenhar com nitidez.

// 📌 O que esse código faz

    if (size * ratio > 90) {
        thumbnailSize = 'b';
    }

// Ele calcula:

    // tamanho visual (CSS) × densidade da tela
    // → resultado = tamanho real em pixels físicos que a imagem precisa ter

    // Se esse valor passar de 90, ele troca para a versão maior da imagem ('b').

// Ou seja:

    // - Decide baseado na necessidade real de pixels
    // - Não apenas no tamanho visual

// 📌 Exemplo prático

    size = 70

// Tela normal (ratio 1):

    // 70 × 1 = 70 → não passa de 90 → usa imagem pequena ('s')

// Tela Retina (ratio 2):

    // 70 × 2 = 140 → passa de 90 → usa imagem grande ('b')

// 📊 Tabela clara

// Tela     | Tamanho CSS | Cálculo (size × ratio) | Imagem escolhida
// ---------|-------------|------------------------|-----------------
// ratio 1  | 70px        | 70                     | pequena ('s')
// ratio 2  | 70px        | 140                    | grande ('b')
// ratio 3  | 70px        | 210                    | grande ('b')

// 💡 Resumo final

    // - CSS define o tamanho visual
    // - devicePixelRatio define quantos pixels reais são usados
    // - O código garante que a imagem tenha pixels suficientes para não ficar borrada
    // - Ele adapta automaticamente a imagem conforme a densidade da tela

// --------------------------

// Os tipos que costumam ter devicePixelRatio maior são:

    // Smartphones e tablets modernos (Retina / AMOLED / OLED) → ratio 2–3
    // Monitores 4K pequenos ou ultrawide → ratio 1.5–2
    // MacBooks e alguns laptops premium → Retina, ratio 2

// Como identificar:

    // Checar window.devicePixelRatio no navegador
    // Ver specs do aparelho (ex: “Retina”, “HiDPI”, “4K”)
    // Dispositivos móveis novos geralmente têm ratio ≥2

// Na hora da compra, como sei?

// Para comprar e saber se o monitor/TV tem alta densidade (ratio maior), olhe por:

    // Resolução e tamanho da tela

        // 4K em 24–27" → pixels muito juntos → HiDPI / ratio alto
        // Full HD em tela grande → ratio ~1

    // Termos do fabricante

        // “Retina”, “HiDPI”, “4K UHD”, “QHD” → indicam alta densidade

    // PPI (pixels por polegada)

        // ≥150 PPI → geralmente ratio >1
        // ≥200 PPI → Retina / muito nítido

    // Reviews ou specs técnicas

    // Pesquisar “devicePixelRatio” ou “PPI” do modelo

// Resumindo: tela pequena + alta resolução = ratio maior.

// [Tem que ficar atento no sentido de conexão lenta, poucos dados em caso de smartphones...]