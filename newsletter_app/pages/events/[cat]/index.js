import Image from "next/image";

const EventsCatPage = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1> Events in {data[0].city}</h1>
      <div>
        {data.map((ev) => (
          <a key={ev.id} href={"/events/${ev.city}/${ev.id}"}>
            <Image width={300} height={300} alt={ev.title} src={ev.image} />
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default EventsCatPage;

//explicity tell Next.js how many pages to create at build time
export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");
  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  //console.log(context); //-> *out1*
  const id = context?.params.cat;
  const { allEvents } = await import("/data/data.json");
  const data = allEvents.filter((ev) => ev.city === id);
  return { props: { data: data } };
}

// *out1*
//context:
//{
//  params: { cat: 'london' },
//  locales: undefined,
//  locale: undefined,
//  defaultLocale: undefined
//}
