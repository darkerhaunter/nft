import { Link } from "remix";
import { useOptionalUser } from "~/utils";
import '../styles/index.css';
import FeaturedNFTsItems from "./components/featured-nfts-items.jsx";
import {RiWallet3Line, RiImageAddFill, RiUpload2Fill} from "react-icons/ri";

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="relative bg-blue-100 dark:bg-blue-600 min-h-screen">
      <HomePage />
    </main>
  );
}

function HomePage() {
  return (
    <div className='dark:bg-blue-600 bg-blue-100 max-w-screen-lg mx-auto pt-10'>
      <div className='relative md:flex h-[27rem]'>
        <div className='md:flex-col my-auto items-center'>
          <h1 className='text-4xl font-bold font-quicksand text-gray-900 dark:text-gray-50'>
            Discover and Buy your own <br /> NFTs & Digital Properties
          </h1>
          <p className="text-lg pt-6 font-medium font-quicksand text-gray-900 dark:text-gray-50">
            Providing convenience to anyone <br />
            who wants to declare ownership on <br />
            their digital properties.
          </p>
          <div className="flex justify-center mt-10 w-80">
            <Link
              to="/create"
              className="relative ease-in duration-100 item-left mr-4 
            rounded-lg w-40 dark:border-2 border bg-blue-300 border-gray-900 dark:border-blue-300 
            hover:bg-blue-200 font-quicksand text-gray-100 text-center hover:bg-blue-40
            hover:text-gray-50 py-2 font-bold">
              Create
            </Link>
            <a
              href="#explore"
              className="ease-in duration-100 item-center rounded-lg
             w-40 dark:border-blue-300 border-gray-800 border-2 bg-gray-50 dark:bg-gray-800 
             dark:hover:bg-gray-700 hover:bg-gray-100
              font-quicksand text-blue-400 py-2 text-center font-bold">
              Discover
            </a>
          </div>
        </div>
        <div className="w-[32rem] h-[26rem]  shadow-2xl top-0 right-0 absolute rounded-xl bg-gray-50 ">

        </div>
      </div>
      <FeaturedNFTs />
      <DiscoverAndCreate />
      <Blogz/>
    </div>
  )
}

const FeaturedNFTs = () => {
  return (
    <div
      className='mx-auto mt-32'>
      <div
        className='text-center h-32 w-full'>
        <h1
          className='text-2xl font-quicksand font-black dark:text-gray-50 text-gray-900'>
          Today's Top NFTs
        </h1>
      </div>
      <div className='md:flex '>
        {/* <div className='pr-9 h-10 w-10 my-auto -rotate-45 border-t-4 border-l-4 border-blue-50 rounded-sm'>

        </div> */}
        <div className='md:flex gap-16 mx-auto'>
          <FeaturedNFTsItems href="nft1">Nice</FeaturedNFTsItems>
          <FeaturedNFTsItems href="nft2">Chill NFTs</FeaturedNFTsItems>
          <FeaturedNFTsItems href="nft3">Nice</FeaturedNFTsItems>
        </div>
        {/* <div className='pl-9 w-10 h-10 my-auto rotate-45 border-t-4 border-r-4 border-blue-50 rounded-sm'>

        </div> */}
      </div>
    </div>
  )
}

const DiscoverAndCreate = () => {
  return (
    <div
      className='mx-auto mt-32'>
      <div
        className='text-center h-24 w-full'>
          <h1
            id="explore"
            className='text-2xl font-quicksand font-black text-gray-900 dark:text-gray-50'>
            Discover and Create NFTs
          </h1>
      </div>
      <div
      className='md:flex gap-12 mx-auto '>
        <div className='mx-auto w-64'>
          <RiWallet3Line className="h-12 w-12 fill-blue-500 dark:fill-blue-300 mx-auto"/>
          <div className='pt-4 text-center'>
            <h3
            className='font-black text-lg text-gray-900 dark:text-gray-50 font-quicksand'>
              Setting Up a Wallet
            </h3>
          </div>
          <div className=' pt-1 text-center'>  
            <p className='font-light tracking-tight leading-5 text-gray-900 dark:text-gray-50 font-quicksand'>
              Set up an 
              <Link to="wallet">
                <span className='font-bold ml-1 text-blue-600 ease-in hover:text-gray-600 dark:hover:text-blue-500 dark:text-blue-400'>
                  external wallet
                </span>
              </Link>
              , and connect it to imite through the wallet button at the top right.
            </p>
          </div>
        </div>
        <div className='mx-auto w-64'>
          <RiImageAddFill className="h-12 w-12 fill-blue-500 dark:fill-blue-300 mx-auto"/>
          <div className='pt-4 text-center'>
            <h3
            className='font-black text-lg text-gray-900 dark:text-gray-50 font-quicksand'>
              Create NFTs
            </h3>
          </div>
          <div className=' pt-1 text-center'>  
            <p className='font-light tracking-tight leading-5 text-gray-900 dark:text-gray-50 font-quicksand'>
              Upload your work (art, audio, or 3D models), add your title and descriptions, and customize the NFT.
            </p>
          </div>
        </div>
        <div className='mx-auto w-64'>
          <RiUpload2Fill className="h-12 w-12 fill-blue-500 dark:fill-blue-300 mx-auto"/>
          <div className='pt-4 text-center'>
            <h3
            className='font-black text-lg text-gray-900 dark:text-gray-50 font-quicksand'>
              Make it Public
            </h3>
          </div>
          <div className=' pt-1 text-center'>  
            <p className='font-light tracking-tight leading-5 text-gray-900 dark:text-gray-50 font-quicksand'>
              You can either make your NFT private for yourself to see, or you can make it visible to everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const Blogz = () => {
  return (
    <div className='mx-auto mt-32 pb-20'>
      <div className='text-center h-24'>
        <h1
        className='font-black text-2xl font-quicksand text-gray-50'>Before you Begin:</h1>
      </div>
      <BlogzItem/>
    </div>
  )
}

const BlogzItem = () => {
  return (
    <div className='flex gap-12 w-4/5 mx-auto'>
      <div className='mx-auto w-56 h-48 relative rounded-lg bg-gray-100 shadow-xl opacity-80 dark:opacity-100 dark:bg-blue-500'>
        <div className='absolute bottom-0 h-1/5 w-full bg-gray-700 opacity-60 rounded-br-lg rounded-bl-lg'>
          <p className='font-bold text-center font-quicksand text-gray-50'>
            Bloggio #1
          </p>
        </div>
      </div>
      <div className='mx-auto w-56 h-48 relative rounded-lg bg-gray-100 shadow-xl opacity-80 dark:opacity-100 dark:bg-blue-500'>
        <div className='absolute bottom-0 h-1/5 w-full bg-gray-700 opacity-60 rounded-br-lg rounded-bl-lg'>
          <p className='font-bold text-center font-quicksand text-gray-50'>
            Bloggio #2
          </p>
        </div>
      </div>
      <div className='mx-auto w-56 h-48 relative rounded-lg bg-gray-100 shadow-xl opacity-80 dark:opacity-100 dark:bg-blue-500'>
        <div className='absolute bottom-0 h-1/5 w-full bg-gray-700 opacity-60 rounded-br-lg rounded-bl-lg'>
          <p className='font-bold text-center font-quicksand text-gray-50'>
            Bloggio #3
          </p>
        </div>
      </div>
    </div>
  )
}