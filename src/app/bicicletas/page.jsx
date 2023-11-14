import Link from "next/link";

export default function Bicicletas() {
  return (
    <div className="bg-blue-100 p-4">
      <h1 className="text-3xl font-bold mb-4">
        Confira alguns exemplares de bikes e seus valores
      </h1>
      <Link href="/">
        <button className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded inline-block mb-4">
          Voltar
        </button>
      </Link>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th class="text-left py-3 px-4 font-semibold text-sm border-b">
              Marca
            </th>
            <th class="text-left py-3 px-4 font-semibold text-sm border-b">
              Preço
            </th>
            <th class="text-left py-3 px-4 font-semibold text-sm border-b">
              Modelo
            </th>
            <th class="text-left py-3 px-4 font-semibold text-sm border-b">
              Modalidade
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-left py-2 px-4 border-b">Caloi</td>
            <td class="text-left py-2 px-4 border-b">R$ 1.649,99</td>
            <td class="text-left py-2 px-4 border-b">400 F</td>
            <td class="text-left py-2 px-4 border-b">Urbana</td>
          </tr>
          <tr>
            <td class="text-left py-2 px-4 border-b">Sense</td>
            <td class="text-left py-2 px-4 border-b">R$ 99.990,00</td>
            <td class="text-left py-2 px-4 border-b">
              Exalt E-Trail Black Edition
            </td>
            <td class="text-left py-2 px-4 border-b">Montanha</td>
          </tr>
          <tr>
            <td class="text-left py-2 px-4 border-b">Oggi</td>
            <td class="text-left py-2 px-4 border-b">R$ 17.890,00</td>
            <td class="text-left py-2 px-4 border-b">Cadenza 500 Disc 2021</td>
            <td class="text-left py-2 px-4 border-b">Speed</td>
          </tr>
          <tr>
            <td class="text-left py-2 px-4 border-b">Soul Cycles</td>
            <td class="text-left py-2 px-4 border-b">R$ 100,000.00</td>
            <td class="text-left py-2 px-4 border-b">3R5 Kronos Red Axs</td>
            <td class="text-left py-2 px-4 border-b">Road</td>
          </tr>
          <tr>
            <td class="text-left py-2 px-4 border-b">Cannondale</td>
            <td class="text-left py-2 px-4 border-b">R$ 14,999.00</td>
            <td class="text-left py-2 px-4 border-b">Topstone 2</td>
            <td class="text-left py-2 px-4 border-b">Gravel</td>
          </tr>
          <tr>
            <td class="text-left py-2 px-4 border-b">Trek</td>
            <td class="text-left py-2 px-4 border-b">R$ 113,999.00</td>
            <td class="text-left py-2 px-4 border-b">
              Supercaliber SLR 9.9 XX AXS 2°Geração
            </td>
            <td class="text-left py-2 px-4 border-b">Montanha</td>
          </tr>
          <tr>
            <td class="text-left py-2 px-4 border-b">Santa Cruz</td>
            <td class="text-left py-2 px-4 border-b">R$ 67,490.00</td>
            <td class="text-left py-2 px-4 border-b">
              V10 CC 29 KIT S COM FOX DHX2 PERFORMACE ELITE
            </td>
            <td class="text-left py-2 px-4 border-b">Downhill</td>
          </tr>
          <tr>
            <td class="text-left py-2 px-4 border-b">BMC</td>
            <td class="text-left py-2 px-4 border-b">R$ 77,199.00</td>
            <td class="text-left py-2 px-4 border-b">
              Teammachine SLR 01 Four Arctic Silver Prisma Carbon 23
            </td>
            <td class="text-left py-2 px-4 border-b">Estrada</td>
          </tr>
          <tr>
            <td class="text-left py-2 px-4 border-b">Cervélo</td>
            <td class="text-left py-2 px-4 border-b">R$ 31,999.00</td>
            <td class="text-left py-2 px-4 border-b">
              Cervélo P 105 Black 2023
            </td>
            <td class="text-left py-2 px-4 border-b">P-Family</td>
          </tr>
          <tr>
            <td class="text-left py-2 px-4 border-b">Specialized</td>
            <td class="text-left py-2 px-4 border-b">R$ 1,990.00</td>
            <td class="text-left py-2 px-4 border-b">Hotwalk</td>
            <td class="text-left py-2 px-4 border-b">Juvenil</td>
          </tr>
          <tr>
            <td class="text-left py-2 px-4 border-b">Giant</td>
            <td class="text-left py-2 px-4 border-b">R$ 5,699.00</td>
            <td class="text-left py-2 px-4 border-b">Trance 29 3</td>
            <td class="text-left py-2 px-4 border-b">Montanha</td>
          </tr>
          <tr>
            <td class="text-left py-2 px-4 border-b">Fuji</td>
            <td class="text-left py-2 px-4 border-b">R$ 4,999.00</td>
            <td class="text-left py-2 px-4 border-b">Jari 1.3</td>
            <td class="text-left py-2 px-4 border-b">Gravel</td>
          </tr>
          <tr>
            <td class="text-left py-2 px-4 border-b">Diamondback</td>
            <td class="text-left py-2 px-4 border-b">R$ 8,199.00</td>
            <td class="text-left py-2 px-4 border-b">Release 3</td>
            <td class="text-left py-2 px-4 border-b">Montanha</td>
          </tr>
          <tr>
            <td class="text-left py-2 px-4 border-b">Yeti Cycles</td>
            <td class="text-left py-2 px-4 border-b">R$ 9,999.00</td>
            <td class="text-left py-2 px-4 border-b">SB130 TURQ</td>
            <td class="text-left py-2 px-4 border-b">Montanha</td>
          </tr>
          <tr>
            <td class="text-left py-2 px-4 border-b">Marin</td>
            <td class="text-left py-2 px-4 border-b">R$ 3,499.00</td>
            <td class="text-left py-2 px-4 border-b">Nail Trail 27.5</td>
            <td class="text-left py-2 px-4 border-b">Montanha</td>
          </tr>
          <tr>
            <td class="text-left py-2 px-4 border-b">Pivot Cycles</td>
            <td class="text-left py-2 px-4 border-b">R$ 6,499.00</td>
            <td class="text-left py-2 px-4 border-b">Trail 429 Carbon XT</td>
            <td class="text-left py-2 px-4 border-b">Montanha</td>
          </tr>
          <tr>
            <td class="text-left py-2 px-4 border-b">Norco</td>
            <td class="text-left py-2 px-4 border-b">R$ 6,999.00</td>
            <td class="text-left py-2 px-4 border-b">Sight A2</td>
            <td class="text-left py-2 px-4 border-b">Montanha</td>
          </tr>
          <tr>
            <td class="text-left py-2 px-4 border-b">Kona</td>
            <td class="text-left py-2 px-4 border-b">R$ 3,999.00</td>
            <td class="text-left py-2 px-4 border-b">Big Honzo DL</td>
            <td class="text-left py-2 px-4 border-b">Montanha</td>
          </tr>
          <tr>
            <td class="text-left py-2 px-4 border-b">Canyon</td>
            <td class="text-left py-2 px-4 border-b">R$ 4,599.00</td>
            <td class="text-left py-2 px-4 border-b">Spectral 29 CF 7</td>
            <td class="text-left py-2 px-4 border-b">Montanha</td>
          </tr>
          <tr>
            <td class="text-left py-2 px-4 border-b">Merida</td>
            <td class="text-left py-2 px-4 border-b">R$ 5,199.00</td>
            <td class="text-left py-2 px-4 border-b">Big Nine 500</td>
            <td class="text-left py-2 px-4 border-b">Montanha</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
