<script setup lang="ts">
import type headerlinks from "~/server/api/mock-data/headerlinks.js";
import type { TemplatesHeaderProps } from "./TemplatesHeaderProps.ts";
const props = withDefaults(defineProps<TemplatesHeaderProps>(), {
  size: "normal",
  isTransparent: false,
});

const transparentStyle = computed(() => {
  if (props.isTransparent) {
    return "bg-transparent text-white hover:bg-white hover:text-black";
  } else {
    return "bg-white text-black";
  }
});

const headerSize = computed(() => {
  switch (props.size) {
    case "small":
      return "h-[40px] py-1";
      break;

    default: //normal
      return "h-[76px] py-2";
      break;
  }
});

const headerClass = computed(() => {
  return [transparentStyle.value, headerSize.value];
});

const { wishListLength } = useWishlist();
const { cartLength } = useCart();
const { isLoggedIn } = useLogin();

const isMenuMobileOpen = ref(false);
const toggleMenuMobile = () => {
  isMenuMobileOpen.value = !isMenuMobileOpen.value;
};
</script>

<template>
  <header
    :class="headerClass"
    class="flex justify-between lg:text-end items-center px-4 md:px-8 sticky top-0 z-50"
  >
    <div class="lg:space-x-4 lg:px-4 lg:order-2 lg:grow">
      <span class="mr-6 lg:hidden">
        <AtomsTooltipWrapper label="Menu">
          <AtomsIconWrapper
            type="button"
            iconName="menu"
            @handleClick="toggleMenuMobile"
          />
        </AtomsTooltipWrapper>
      </span>
      <span class="hidden lg:inline">
        <AtomsTooltipWrapper label="Search" direction="up">
          <AtomsIconWrapper
            type="button"
            tooltipLabel="Search"
            iconName="search"
          />
        </AtomsTooltipWrapper>
      </span>
      <span>
        <AtomsTooltipWrapper label="Account">
          <AtomsIconWrapper
            type="link"
            :iconName="isLoggedIn ? 'logged' : 'account'"
          >
          </AtomsIconWrapper>
        </AtomsTooltipWrapper>
      </span>
    </div>

    <div class="pr-4 lg:pr-10 min-xl :pr-10">
      <AtomsLogoDefault />
    </div>

    <div class="hidden lg:flex grow gap-4 flex-1/2 flex-wrap xl:gap-10">
      <AtomsLink
        v-for="link in links"
        :name="
          typeof link.label === 'string'
            ? link.label.toLocaleUpperCase()
            : link.label
        "
        :href="link.href"
        :key="link.value"
      />
    </div>

    <div class="space-x-4 lg:order-3">
      <span class="lg:hidden">
        <AtomsTooltipWrapper label="Search">
          <AtomsIconWrapper type="button" iconName="search" />
        </AtomsTooltipWrapper>
      </span>
      <span class="space-x-4 max-lg:hidden relative">
        <AtomsTooltipWrapper label="Store Locator">
          <AtomsIconWrapper type="link" iconName="pin" />
        </AtomsTooltipWrapper>
        <AtomsTooltipWrapper label="Wishlist">
          <AtomsIconWrapper
            type="link"
            :badgeSize="wishListLength"
            iconName="wishlist"
          />
        </AtomsTooltipWrapper>
      </span>
      <span class="text-center relative">
        <AtomsTooltipWrapper label="Cart">
          <AtomsIconWrapper
            type="link"
            :badgeSize="cartLength"
            iconName="cart"
          />
        </AtomsTooltipWrapper>
      </span>
    </div>
  </header>
  <MoleculesMobileMenu :statusMenu="isMenuMobileOpen" />
  <div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae vel
    architecto fugiat consectetur nihil veritatis! Reiciendis sint, labore nobis
    pariatur rem quod expedita nam dolorum, eos atque rerum corporis! Quaerat
    recusandae quod provident cumque odit reiciendis aliquid voluptatibus quasi
    dolorem, nam repudiandae illum fugiat saepe. Alias sunt debitis earum fugit
    similique natus. Aperiam, nisi tenetur. Hic ab repellat sint. Excepturi
    iusto consequuntur ipsum quis laudantium voluptatibus porro pariatur eum
    perspiciatis aperiam atque, nobis iste laborum possimus unde a fuga eaque
    magnam ab explicabo autem optio aliquid sapiente. Repellat, voluptas?
    Consequatur numquam minus dolor atque, quam odit. Velit nobis dolor
    molestiae perferendis ullam ducimus vero alias exercitationem, deleniti sed
    tempore non necessitatibus harum debitis placeat hic adipisci est expedita
    repudiandae! Magnam voluptas laborum vel, asperiores provident eius eum
    illum explicabo et odit doloribus. Aperiam quia dolor ipsum quibusdam,
    laboriosam suscipit praesentium? Molestias facere rerum pariatur amet ipsa
    consectetur. Deleniti, ratione. Nisi, exercitationem quas! Repellendus
    doloremque facere, officiis blanditiis, maiores quod maxime eos corporis cum
    animi dolorem dignissimos. Accusantium, aperiam. Vero soluta ipsa ad nobis
    pariatur, facere reiciendis at voluptatem eos. Quod, a. Eveniet quis dolor,
    quo corrupti nobis aperiam rerum tenetur doloremque vero quam rem qui
    facilis necessitatibus debitis iure id veritatis unde dolore vel mollitia
    delectus maiores omnis inventore? Perspiciatis nam, dolorem reiciendis autem
    natus veritatis rerum veniam hic dolores aperiam exercitationem provident
    consectetur maxime quos laborum temporibus? Aliquam explicabo impedit et
    nemo facilis eum laboriosam adipisci quae numquam. Ipsum doloribus, velit
    nisi cum officiis maiores libero ipsam rerum debitis quaerat autem
    repellendus, sequi molestias quod impedit rem unde molestiae cumque ducimus!
    Sapiente earum omnis inventore, dolores illum iste. Doloremque nobis cum
    dolorem repellat consequatur illum fugiat sit inventore, rem vero enim a
    corrupti ipsam! Fugit provident eveniet quasi maxime eos, corrupti
    consectetur doloremque nesciunt nihil iusto dolores ea. Repellat alias
    dolore voluptatum mollitia, quasi deserunt excepturi doloribus nihil dicta
    et. Id dolor fuga nam distinctio aliquam. Accusamus, ducimus. Temporibus
    animi, eligendi harum nostrum sunt maxime dicta tempora provident? Quasi
    modi excepturi totam nobis magni hic neque eveniet exercitationem laudantium
    laboriosam, eaque aut odio iste magnam commodi amet illo quidem nam in
    accusantium. Necessitatibus illo blanditiis in ea voluptate? Architecto
    adipisci dolore reprehenderit a fugiat velit necessitatibus omnis earum
    repudiandae iste ullam sed, rerum molestiae harum odit at beatae dolorum
    consectetur aperiam aut impedit voluptate similique ipsam. Qui, consequatur!
    Magni quod iusto sapiente deserunt et molestias dignissimos, praesentium
    sit, reiciendis, libero nesciunt? Sit tenetur doloribus sapiente ipsum porro
    eveniet dolore corporis consequuntur minima error voluptatum ex cum, placeat
    unde. Harum fuga quia, rerum recusandae delectus laudantium et, quaerat nisi
    mollitia sequi reprehenderit! Facere consequuntur aliquid debitis quibusdam
    nulla sit eum omnis, ipsa ab, laborum fugiat alias, ipsum facilis dolores.
    Ex quaerat veniam ducimus nam temporibus dicta animi. Modi non ab quas
    provident fuga iusto veniam, sequi eveniet quod cupiditate distinctio
    quibusdam sit, quis voluptatum obcaecati sunt repellendus. Tenetur,
    distinctio. Quia, rem fugit. Tenetur mollitia ab quia error, velit vel esse
    tempora laboriosam iste perspiciatis reiciendis assumenda aut ad iusto culpa
    porro maxime, ea laborum totam, excepturi aliquam minus deserunt. Aperiam
    maiores ut quaerat non aliquam ab voluptates quasi tempore aspernatur. Error
    architecto eveniet excepturi voluptates non atque ex libero reprehenderit
    sit odio, dolore consequatur beatae sapiente fugit repudiandae reiciendis.
    Vel consequatur, beatae magni qui porro voluptas dolor atque modi placeat
    unde recusandae. Nisi, dolor hic in quibusdam nostrum ex fuga praesentium
    qui amet. Nobis illo voluptatum ducimus iste exercitationem. Illo nisi sequi
    velit ea, neque dignissimos autem explicabo quidem officiis cum eligendi
    eum, ullam eveniet vel officia et laboriosam voluptatum error alias
    laudantium veritatis earum nulla! Voluptates, illum totam! Quis voluptates
    neque tenetur perspiciatis tempora cupiditate eveniet fuga. Praesentium a
    commodi quibusdam dolores sapiente nihil ipsa possimus, itaque aut rerum
    excepturi hic ut, odio recusandae quam, laudantium similique porro! Minima
    quibusdam ipsam suscipit. Sed reprehenderit eaque nam sunt veniam nihil
    repellendus voluptas consequuntur. Molestiae repellat quam, enim, corrupti
    praesentium est ratione maiores atque dignissimos aliquid doloribus velit
    cum repudiandae. Ratione, voluptatibus architecto hic saepe assumenda illo
    natus a, dolorem corporis adipisci harum cupiditate. Maiores totam alias
    quisquam necessitatibus ipsum itaque quae impedit enim beatae corrupti
    voluptatibus eos, ipsam neque. Excepturi tempora provident impedit sunt
    atque. Quo alias aliquam, expedita modi totam earum dolore officia ad
    fugiat. Quibusdam consequuntur voluptate nulla, facere, unde quam porro,
    laboriosam consequatur praesentium natus recusandae! Necessitatibus
    consequuntur enim quis reprehenderit quos repellendus doloremque vitae rem
    suscipit officia ad maxime porro, recusandae facilis vero blanditiis quod
    explicabo provident, dolore iusto? Eos aperiam dolor a animi nostrum. Quidem
    modi ad asperiores dolore dolores suscipit aliquid vitae accusantium
    consectetur. Possimus, voluptate non maiores nulla tempora eius, natus
    veniam aut molestiae, saepe ex alias commodi omnis deserunt ipsa fugiat.
    Nihil hic odio maiores itaque amet minus quos laboriosam. Aspernatur minus
    tempora quisquam repellendus maxime iure incidunt quod obcaecati. Nemo ipsum
    in tempore illo laudantium recusandae itaque eos nostrum natus! Aperiam
    consequuntur quibusdam dolorum quia hic vero in qui accusamus et, deleniti
    praesentium molestiae modi fugit tempore perspiciatis eius soluta ipsam odit
    dolores adipisci? Doloribus quisquam dolor aspernatur amet sed. Odit ducimus
    aliquam, nulla quidem culpa reprehenderit labore veniam laudantium
    consectetur voluptates nisi in perferendis, cumque facere praesentium ipsam
    dolor eos quis error cupiditate magni aperiam! Rem fugit voluptatem itaque?
    Eos dolor hic enim est dignissimos sit cumque quos, animi reiciendis libero
    praesentium fugit exercitationem vitae ipsam quidem vel. Repellendus debitis
    voluptatem dolore voluptatum nam alias consectetur, doloremque ipsam
    sapiente. Saepe veniam assumenda adipisci necessitatibus tempore suscipit,
    non expedita laborum ea. Asperiores quae harum, cupiditate ducimus qui
    quaerat accusantium dolor similique eius eaque iste dolorum atque saepe
    sapiente? Dolor, eius. Officia veniam voluptate mollitia non, voluptates
    iusto dolore quam, ipsum modi porro blanditiis quia ab, reiciendis quisquam.
    Velit culpa dolor facere libero et animi minima, corrupti iste cum expedita
    qui. Excepturi dicta, quas ad est quos sunt quam esse facere autem quisquam
    possimus soluta accusantium architecto nam! Facilis quia ipsam aperiam
    repellat iusto perferendis eius officiis, dignissimos totam error at.
    Debitis fuga reiciendis eos aperiam iste nesciunt quasi exercitationem
    ratione quibusdam, doloribus dolorem nobis molestiae voluptate veniam nulla
    itaque voluptatem, amet expedita ipsam autem aliquam corporis natus quod
    libero. Consectetur? Fugiat quidem suscipit omnis tempora. Molestiae eveniet
    maiores omnis adipisci totam, non veritatis laudantium molestias mollitia
    autem, voluptas dolores animi accusamus illum ab nesciunt iste beatae
    voluptatum obcaecati. Iusto, eveniet? Laborum animi rem quae numquam,
    suscipit tempora perspiciatis corrupti alias voluptates labore commodi,
    libero repellendus cupiditate autem molestiae consequuntur dignissimos
    debitis nobis impedit repellat deleniti, unde sapiente rerum odit.
    Voluptate? Rem culpa animi reprehenderit, dolor libero similique dolores
    illum hic sed eligendi, doloremque sequi quo consequatur eum ratione fugit
    minus incidunt voluptates quidem? Qui quasi sit architecto est inventore
    distinctio. Accusantium fugit tenetur laudantium asperiores nemo quasi
    quidem aspernatur soluta et, eveniet incidunt iusto consequuntur dolores
    saepe, temporibus recusandae. Ratione, culpa excepturi. Fugit soluta maiores
    iste non est nesciunt impedit. Nostrum corrupti veniam modi officiis rerum
    nobis, labore similique. Harum temporibus veritatis quisquam omnis impedit
    nobis, at maiores facere possimus! Similique laborum, commodi sed nesciunt
    deserunt animi praesentium autem cum! Soluta veritatis saepe voluptas
    tempore error obcaecati quos. Magni autem repellendus quisquam, maxime
    exercitationem nobis dicta alias quaerat doloribus laboriosam saepe corrupti
    id aspernatur soluta nemo fuga ipsum. Neque, explicabo. Voluptate officia
    voluptas ducimus similique aliquid cupiditate qui velit eius non, suscipit
    ea, aut nostrum earum impedit esse consequatur accusantium dignissimos
    minima? Nostrum, nemo modi. Placeat ratione dolores est. Atque.
    Reprehenderit optio cumque rerum magni, asperiores, aliquam repellendus
    velit amet totam non ab quas vero necessitatibus minus dolorem placeat
    praesentium. Molestiae fugiat aut quos suscipit quasi sapiente perferendis
    delectus quia! Aut nisi esse omnis, est aliquam distinctio dicta libero
    rerum harum facilis quasi consequuntur quam sapiente iusto modi impedit.
    Earum magnam unde nostrum minus suscipit iusto, distinctio necessitatibus
    deleniti blanditiis! Iure quibusdam voluptates animi incidunt nostrum
    doloribus fugit omnis saepe, cumque molestiae quod debitis est voluptas,
    inventore laudantium quo, nobis nesciunt dicta atque provident! Magni sed
    similique repellat facere corporis? Numquam similique, id molestiae corrupti
    ullam placeat labore! A tempore eveniet obcaecati quas atque nesciunt
    exercitationem, doloremque perferendis iusto labore asperiores libero
    architecto, tempora rerum quis aperiam, possimus repellat officia. Ab
    explicabo cumque earum temporibus consequuntur iste vitae est suscipit,
    obcaecati dolore illo autem dicta et nihil quibusdam fuga debitis distinctio
    quaerat odit porro accusamus. Veritatis, rerum? Atque, modi error? Quos rem
    iure temporibus repellendus at perspiciatis laudantium, sapiente incidunt
    consectetur, vitae corporis nihil assumenda ullam! Eos dignissimos, quam
    numquam sint alias quod sequi quisquam suscipit nesciunt quas ex ipsam?
    Quasi natus dicta delectus soluta neque! Nihil laboriosam consectetur
    molestias, error, alias nisi aspernatur quod fugiat sapiente asperiores
    saepe incidunt praesentium id, officia illo libero tempora. Ipsam expedita
    delectus repellendus. Facere non qui, neque inventore quae exercitationem!
    Nulla voluptas ea et? Facilis, consectetur dolores provident accusantium
    eligendi eaque ab saepe animi, modi distinctio magni. Mollitia eaque quaerat
    deserunt quae illo. Cum eos ipsum quasi ut officiis, molestiae dignissimos
    impedit, laudantium, fugit voluptatibus quod inventore ipsa laborum quam
    praesentium qui provident vel vitae dolor quisquam enim amet ab? Iusto,
    cupiditate tempora? Numquam cupiditate expedita inventore ab iste eos
    voluptatum aperiam dolore, et eligendi, praesentium accusamus accusantium
    neque atque nihil totam itaque quam vero quia? Maxime officia reiciendis,
    dolores fugiat adipisci cupiditate? Iusto architecto sequi veritatis quae
    itaque necessitatibus tempore nulla. Impedit iusto commodi molestiae
    repellendus culpa quasi ut sapiente cupiditate veniam at, harum expedita.
    Aliquam nobis exercitationem debitis sunt provident aperiam. Velit placeat
    quisquam recusandae temporibus enim sed saepe quae aliquid doloremque id,
    sapiente, nulla explicabo inventore cupiditate. Tempore eveniet doloribus
    debitis laboriosam iste fugiat accusantium ad dicta, qui illum consequuntur.
    Iure ad magnam cum voluptatibus autem odio doloremque nostrum laudantium!
    Aspernatur doloremque, ut error ullam quas, quia cum nulla debitis ducimus
    distinctio nemo eius. Similique, iure? Aliquam error suscipit dolores! Quas
    provident odit modi? Nostrum dignissimos cum hic, quasi sint ratione est
    necessitatibus molestias, aliquid repudiandae assumenda delectus veniam
    quisquam! Adipisci animi sint aperiam expedita quibusdam veritatis, incidunt
    illo voluptas. Eum tempora minima deserunt, exercitationem libero explicabo
    facilis quam quibusdam assumenda alias nam ipsum beatae nihil quos. Fugiat,
    dolorem odio, rerum qui quam laborum hic facere, officia ducimus dolor est.
    Quidem accusamus modi cum aliquam, unde explicabo doloribus eligendi,
    temporibus autem laudantium est consectetur iure? Neque fuga alias
    architecto sed sequi est, aspernatur asperiores nam nesciunt illo cumque
    assumenda facere! Beatae aperiam expedita ut laudantium. Perferendis tempora
    totam, harum dolorem animi facilis, aspernatur est odio soluta magni, atque
    praesentium non ipsam minima voluptates? Eaque eveniet itaque excepturi quis
    delectus blanditiis. Nulla molestiae quisquam impedit magni reprehenderit
    dicta tempore, maiores aut aliquid facere illum asperiores, quaerat est
    accusamus repellendus omnis corrupti quod voluptate illo vel optio
    voluptatem voluptatum sed! Nemo, reprehenderit! Ea amet totam tempora
    dolorem mollitia excepturi corrupti in temporibus sed quisquam similique,
    porro laboriosam iure modi laudantium vitae eveniet vel maiores, cum,
    accusantium eius officia deleniti repellendus odit. Neque. Rerum odio
    voluptatem sequi, temporibus dolor nisi expedita sapiente? Pariatur eius
    repellendus debitis aspernatur optio voluptate, perferendis magnam dolorem
    dolores! Sed sint illum quo, voluptas porro est similique incidunt placeat.
    Dolor vel laboriosam maxime aperiam tempore rem est commodi, nobis, magni
    molestiae qui maiores. Suscipit, qui possimus. Odio ratione nam, expedita
    eos magni quibusdam a cupiditate eveniet, harum fugiat adipisci? Non quas
    earum debitis est assumenda eos nemo tempora suscipit facilis mollitia
    tenetur dolores sunt iure, molestiae quaerat maxime eius, eum placeat nulla
    accusantium dignissimos dolorem. Fugit excepturi dolore consectetur. Maiores
    fuga sunt saepe neque, blanditiis non odit? Corporis, placeat. Totam sint
    repellendus rerum repellat odio optio soluta illo mollitia nulla a, modi
    molestias nisi sit quod, cumque, pariatur corporis? Nam, incidunt et!
    Accusamus deserunt quo nisi sit, suscipit libero? Quam temporibus soluta qui
    mollitia provident. Deserunt assumenda deleniti, pariatur error non laborum
    ex debitis aliquid magni consequuntur, at itaque. Sequi nostrum inventore
    asperiores ut quae voluptates, eveniet fugiat explicabo, quisquam accusamus
    soluta, esse voluptate nam odio! Dicta perferendis magnam accusantium ipsum
    veritatis sit vel, at quia pariatur eveniet? Necessitatibus. Tempore labore
    fugit placeat hic exercitationem blanditiis magni aliquid iure magnam
    corporis recusandae, ducimus itaque doloribus laudantium aliquam quibusdam
    odit libero asperiores molestiae iusto ratione nostrum. Cum quisquam dolores
    adipisci! Aspernatur suscipit libero facere illo cumque non quae ea nisi
    veniam architecto fugiat, quod omnis repellat repellendus magnam nulla
    laboriosam earum alias! Esse culpa recusandae unde eveniet id quia nesciunt?
    Deserunt tempora nam consequuntur aut quibusdam, facilis numquam ad eveniet
    ab quae sint labore officiis alias, velit voluptatum neque voluptatibus
    delectus totam minima? Fugit harum, perspiciatis nobis id praesentium rerum.
    Cum accusantium itaque perferendis libero illum, maiores iusto laborum autem
    excepturi a quo. Maxime voluptates assumenda, corrupti, pariatur quos qui
    quae voluptatum eius beatae non perspiciatis repellat libero? Minus, quo.
    Commodi aliquid assumenda odio nesciunt libero facilis, est, recusandae
    tenetur natus minima a mollitia maiores molestiae necessitatibus
    voluptatibus modi reiciendis perferendis dolores? Dolorum tenetur reiciendis
    dignissimos, optio vero molestias! Repudiandae. Vel, veritatis earum!
    Ratione error, velit at excepturi sit vel maiores debitis aperiam molestias
    non in laboriosam porro voluptates quasi unde sequi itaque ipsa voluptatibus
    quibusdam eligendi officiis eius voluptatum! Minus dolor temporibus
    doloremque ea. Recusandae, quas. Doloremque voluptas nostrum similique
    molestias esse animi nesciunt explicabo aliquam aut, dignissimos veniam,
    illo natus neque. Odit obcaecati quos commodi autem, animi iure? Sunt,
    aspernatur. Consequuntur, qui? Commodi fugit itaque recusandae obcaecati
    accusantium ut deleniti illo id sunt explicabo cupiditate qui et labore
    perferendis consequatur cum similique ex, quam nobis consequuntur nesciunt
    quia. Tempora asperiores voluptate, dolorem aperiam autem minima? Ex beatae
    magnam recusandae voluptas provident tempore at itaque fugiat deserunt
    quibusdam veritatis perspiciatis impedit iusto, laudantium cupiditate unde
    consequuntur eos deleniti officiis? Sequi ea neque adipisci magni pariatur
    quam tenetur iure tempore architecto sit ducimus, at ipsum natus veniam? Nam
    a dolorum, omnis nesciunt odit voluptas accusamus non, necessitatibus
    officia dolores odio. Consectetur quo minus consequuntur explicabo obcaecati
    ea incidunt reprehenderit unde necessitatibus accusantium, voluptates
    delectus aliquam, commodi quaerat laborum a saepe. Eligendi sed maxime
    magnam, atque voluptate temporibus aliquam dicta eos. Natus debitis voluptas
    aut ullam. Corrupti itaque labore placeat reiciendis repellendus commodi
    nisi qui non? Libero officiis cumque veritatis eius ullam vitae, facere in.
    Tempore eveniet sint autem maxime adipisci! A quae pariatur quis, sapiente
    excepturi obcaecati saepe ipsam consectetur harum eius quidem dolores
    explicabo accusantium doloremque deleniti eaque adipisci velit, totam
    fugiat! Id animi esse dolor, delectus est sit! Perferendis veritatis vel
    quae aliquam et tenetur atque. Voluptatibus nemo placeat aut cum rem
    consectetur? Dignissimos consequatur quae natus sunt tenetur. Ullam sunt
    vero possimus! Ex ab tempora perspiciatis odio. Aperiam, dolores et!
    Laudantium ex modi voluptate impedit dicta! Assumenda, dolorem accusamus
    exercitationem quidem et distinctio, quia provident soluta laudantium
    pariatur vel iste veniam dolore optio odio nesciunt quasi odit? Fugit cumque
    minus accusantium aspernatur vel exercitationem deserunt officiis numquam
    quod. Deserunt maiores modi expedita quidem. Doloremque quidem voluptates
    debitis facere? Dicta laborum vel impedit facilis pariatur repellendus omnis
    nesciunt! Quo quae explicabo voluptatibus iusto maxime sequi eaque modi
    doloremque repudiandae praesentium? Maxime doloribus, nobis numquam soluta
    iste quisquam autem asperiores repudiandae enim nihil ex pariatur tempora,
    qui iure voluptatem. Magni, minus quod voluptas quo, sit facilis totam
    inventore, odit quos assumenda tenetur accusantium blanditiis atque amet
    unde soluta ullam voluptatum autem itaque sequi iste fugit beatae? Porro,
    aut cupiditate! Iure, magnam. Quo eveniet voluptatum eligendi. Voluptas
    eaque voluptates, rerum nemo tempora assumenda itaque atque at harum fuga
    officiis possimus, autem soluta sint, esse maiores officia delectus
    dignissimos reiciendis corrupti. Nulla voluptatibus magni explicabo
    possimus, assumenda et a corrupti ipsam, cum minus nobis exercitationem
    quaerat minima velit eius consequatur pariatur ipsa suscipit quisquam quod
    esse expedita fugiat? Dolorum, consequatur magnam! Commodi temporibus
    inventore aliquam alias facere minus expedita sapiente quis architecto
    magnam. Consequatur doloribus necessitatibus earum, praesentium porro eaque
    vero quae. Nesciunt, officiis nulla? Consectetur nisi animi officia nam
    deleniti. Accusantium quos, optio inventore beatae numquam, tenetur sed
    asperiores dicta debitis, rerum recusandae alias deserunt dolore atque!
    Placeat possimus consectetur officia eum aspernatur est, earum dolore,
    tenetur sequi corporis a. Ab ratione consectetur temporibus voluptatum,
    ipsum distinctio assumenda nemo debitis excepturi magni quaerat ad
    praesentium recusandae pariatur quisquam voluptatibus nisi sunt repudiandae
    impedit id. Eum optio neque numquam voluptatibus deserunt. Non tenetur
    necessitatibus minima veritatis. Sed, tempore minima ut repudiandae
    praesentium ad accusamus ducimus inventore quia architecto eveniet quidem
    qui tempora libero iure nisi totam earum, error corporis ea aliquid.
    Eligendi quisquam dolorem provident at molestias veritatis, quasi,
    consectetur non sit fugiat adipisci mollitia quam dolores facilis laborum!
    Expedita magni saepe, maxime autem eveniet neque tempora nesciunt delectus
    dolore rerum. Ex numquam itaque aliquam quisquam deserunt temporibus
    distinctio culpa similique iure deleniti quos corrupti iste adipisci
    explicabo magnam cum ducimus, optio quas neque! Cum officiis autem debitis
    a, quae fugiat? Libero doloribus placeat id eligendi fugit dolore eveniet
    commodi perferendis labore autem, repellendus odio! Nihil voluptatum dicta
    necessitatibus, doloribus architecto at quis inventore accusantium earum
    totam quas ratione, illo omnis? Nesciunt aliquam tempora labore perspiciatis
    dicta aperiam exercitationem, quas quae, repellat ullam, laboriosam itaque
    repudiandae! Soluta cumque iste deleniti eligendi, consectetur officiis
    enim, debitis corporis et nulla, sunt nisi animi? Totam animi quas,
    blanditiis numquam sapiente quis pariatur illo architecto odio quisquam
    minima nesciunt nobis fugiat facilis quo est harum maxime ut voluptatem
    deleniti laboriosam cumque dolor! Exercitationem, corporis itaque.
    Consequuntur libero facere quidem maiores deleniti, aut inventore saepe
    sapiente porro molestias iste quo accusamus tempore aliquam, assumenda qui!
    Repellendus expedita a voluptatem perspiciatis nisi commodi numquam qui
    repudiandae reprehenderit. Soluta dolor necessitatibus quidem unde! Pariatur
    sapiente aperiam, voluptas rem quis, doloremque cumque, amet delectus
    maiores eos optio culpa nesciunt! Laborum beatae expedita nostrum, porro
    mollitia accusantium repellendus esse iure? Quisquam suscipit voluptates,
    repellendus adipisci ullam dolorum! Dolores pariatur aliquid obcaecati quia
    blanditiis, quo provident sed? Mollitia qui molestias illum sit recusandae
    maiores, fugit eaque sint rem id! Omnis, eos? Rem suscipit nesciunt est quam
    adipisci voluptate fuga sapiente ducimus maiores distinctio atque temporibus
    impedit possimus vel, quaerat, aut accusantium eum? Repellendus explicabo
    eaque reiciendis commodi quam dolor quasi tenetur. Velit dolorum molestiae
    dicta mollitia quod unde vero quisquam culpa perferendis rem, officiis,
    magni nam hic est quo quos delectus reiciendis nobis officia ad consectetur?
    Porro ratione sed tenetur inventore?
  </div>
</template>
