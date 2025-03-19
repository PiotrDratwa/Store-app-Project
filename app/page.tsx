import {Button} from '@/components/ui/button'
import Link from 'next/link'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import Hero from '@/components/home/Hero';

function HomePage() {
  return <div>
      <Hero />
      <FeaturedProducts />
    </div>;
}
export default HomePage;