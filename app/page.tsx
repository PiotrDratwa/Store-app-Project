import {Button} from '@/components/ui/button'
import { Ghost } from 'lucide-react';
import Link from 'next/link'

function HomePage() {
  return <div>
    <h1 className='text-3xl'>HomePage</h1>
    <Button variant='default' size='lg' asChild>
      <Link href='/about'>About</Link>
    </Button>
    </div>;
}
export default HomePage;