import './App.css';
import { useEffect,useState } from "react";
import { motion } from "framer-motion";



function App() {
    const [active,setActive] = useState(false)
    const [scrollY, setScrollY] = useState(0);
    const [aImage, setAImage] = useState('');
    const [text,setText] = useState([
        {
            atext: 'Use your calendar as a todo list',
            interacted: false,
        },
        {
            atext: 'Use your calendar as a todo list',
            interacted: false,
        },
        {
            atext: 'Use your calendar as a todo list',
            interacted: false,
        },
        {
            atext: 'Use your calendar as a todo list',
            interacted: false,
        },
        {
            atext: 'Use your calendar as a todo list',
            interacted: false,
        },
    ])


    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };


        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    useEffect(() => {
        if(aImage != null){
            setActive(true)
        }else{
            setActive(false)
        }
        console.log(active)
    }, [aImage]);




    const dtra1 = 300;
    const dtra2 = 800;
    const dtra3 = 1200;
    const dtra4 = 1600;
    const dtra5 = 2000;

    useEffect(() => {
        if (scrollY >= dtra1 && scrollY < dtra2) {
            setAImage('https://media.discordapp.net/attachments/458045331024904192/1155595812684976138/image.png');
            setText((prevText) => {
                return prevText.map((item, index) => {
                    return { ...item, interacted: index === 0 };
                });
            });

        }else if ( scrollY >= dtra5 && scrollY > dtra4 ) {

            setAImage('https://media.discordapp.net/attachments/458045331024904192/1155595895660888105/image.png');
            setText((prevText) => {
                return prevText.map((item, index) => {
                    return { ...item, interacted: index === 4 };
                });
            });

        }
        else if (scrollY >= dtra2 && scrollY < dtra3) {

            setAImage('https://cdn.discordapp.com/attachments/458045331024904192/1155595833044119663/image.png');
            setText((prevText) => {
                return prevText.map((item, index) => {
                    return { ...item, interacted: index === 1 };
                });
            });

        } else if (scrollY >= dtra3 && scrollY < dtra4) {

            setAImage('https://cdn.discordapp.com/attachments/458045331024904192/1155595856049872896/image.png');
            setText((prevText) => {
                return prevText.map((item, index) => {
                    return { ...item, interacted: index === 2 };
                });
            });
        } else if (scrollY >= dtra4 && scrollY > dtra3) {

            setAImage('https://cdn.discordapp.com/attachments/458045331024904192/1155595875935064206/image.png');
            setText((prevText) => {
                return prevText.map((item, index) => {
                    return { ...item, interacted: index === 3 };
                });
            });
        } else if(scrollY > dtra5 +500) {
            setActive(false)
        } else {
            setAImage(null);
            setActive(false)
        }
    }, [scrollY]);

    return (
        <div>
            <div className={'w-full flex justify-center flex-row items-center  h-[2000px]'}>
               <div className={'flex text-gray-500 flex-col justify-start items-start w-fit mt-[2700px] lg:gap-[200px] 2xl:gap-[350px]'}>
                   {text.map(item =>  <div className={' mr-24 xl:text-xl text-2xl  2xl:text-6xl font-bold'}>
                       <h1 className={` ${item.interacted ? 'text-black' : ''}`}>{item.atext}</h1>
                   </div>)}

               </div>
              <div className={'flex flex-row h-[5000px] items-center sticky top-[750px]'}>
                  <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 3 }}
                      className={`lg:w-[250px] lg:h-[250px] 2xl:w-[500px] rounded-2xl 2xl:h-[500px] bg-gray-100 sticky top-[25vw]`}>
                      {scrollY >= dtra1 ? scrollY > dtra5 + 500 ? ()=> {setActive(false)} : <motion.img
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.5 }}
                          src={aImage} className={'animate-image rounded-2xl w-full h-full'} alt=""/>  : ''}
                  </motion.div>
              </div>
            </div>
            <div className={'w-full h-[2500px] '}></div>
        </div>
    )
}

export default App;
