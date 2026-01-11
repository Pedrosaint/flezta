
import TopSectionComp from "../components/top_section.comp"
import ListProductComp from "../components/list_product.comp"
import TopDealsComp from "../components/top_deals.comp"
import TopSellersComp from "../components/top_sellers.comp"
import TrustComp from "../components/trust.comp"
import FleztaDownloadComp from "../components/flezta_download.comp"
import NewsletterComp from "../components/newsletter.comp"

const HomePage = () => {
  return (
   <section>
     <TopSectionComp />
     <ListProductComp />
     <TopDealsComp />
     <TopSellersComp />
     <TrustComp />
     <FleztaDownloadComp />
     <NewsletterComp />
   </section>
  )
}

export default HomePage
