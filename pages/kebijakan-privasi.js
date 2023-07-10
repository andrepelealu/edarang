import KebijakanPrivasi from "../components/Kebijakan_privasi";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead title='Edarang CRM Platform | Kebijakan Privasi' />
      <Layout>
        <KebijakanPrivasi />
      </Layout>
    </>
  );
}
