import HomeView from "@/views/home"

const Home = ({ information }: { information: Record<string,string> }) => {
  return (
    <HomeView information={information} />
  )
}

export const getStaticProps = () => {
  const information = {
    title: 'Bienvenidos a nutricion en forma ya',
    subtitle: 'Baja de peso aprendiendo a comer mejor',
    body: 'Un par de boludeces'
  }
  return {
    props: {
      information
    }
  }
}

export default Home