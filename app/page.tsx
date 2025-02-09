import Header from "@/app/components/Header"
import Hero from "@/app/components/Hero"
import PopularCar from "@/app/components/PopularCar";
import RecommendedCar from "@/app/components/RecommendedCar"
import Footer from '@/app/components/Footer';

export default function home (){
  return(
    <div>
      <Header/>
      <Hero/>
      <PopularCar />
      <RecommendedCar/> 
      <Footer/>
    </div>
  )
}