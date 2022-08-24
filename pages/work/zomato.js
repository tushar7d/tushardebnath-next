import Head from "next/head";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function Zomato() {
  return (
    <>
      <Head>
        <title>Tushar Debnath</title>
      </Head>

      <div className="max-w-3xl p-3 mx-auto mt-24 prose ">
        <h1>Zomato Order Tracker</h1>
        <p>
          Helping millions of Zomato users answer the biggest question of all
          time! "Mera Khana Kahan hai?"( Where is my Food ? )
        </p>

        <Zoom>
          <img src="/zomato/crystal.png" />
        </Zoom>

        <h2>Context & My Role</h2>
        <p>
          Zomato is India's largest food delivery platform, with millions of
          users ordering food every day. As a Senior Product Designer, I led the
          redesign of their existing order tracking system and created a
          framework for scalability, rapid development, and testing.
        </p>

        <h2>Problem</h2>
        <p>
          Based on user studies and internal tracking matrices, we formulated a
          series of problems we wanted to resolve with this re-design:
        </p>
        <ul>
          <li>Reducing user anxiety about the status of their order.</li>
          <li>Help users build trust in the system.</li>
          <li>
            Create a scalable design framework for all our different businesses
            like food delivery Grocery Delivery, Nutrition (Health Supplement)
            Etc.x
          </li>
        </ul>

        <h2>A brief walkthrough of the solution</h2>
        <h3>Reducing user anxiety about the status of their order.</h3>
        <p>
          For reducing user anxiety, we tried two approaches. A/B testing and
          user interviews helped us decide on a winning approach. The following
          is a brief overview of the two approaches that we used.
        </p>
        <Zoom>
        <img src="/zomato/one.png" />
      
        </Zoom>
        <h4>Approach 1 (Winner)</h4>
        <p>
          In this approach, we used bold colours and typography to suggest the
          status of the order, by using existing colours associations (for
          instance, green is perceived as positive).
        </p>


        <Zoom>
        <img src="/zomato/two.png" />
        </Zoom>

      
        <h4>Approach 2</h4>
        <p>
          In this approach, we used progressive disclosure to call out the
          precise state that the order is in. So the user knows on a micro-level
          what is happening with their order. This approach did not work out for
          us as it was negatively impacting our matrices like ORS (orders
          requiring support) and Order cancellation.
        </p>
        <h3>Help users build trust in the system.</h3>
        <p>
          We believe that transparency is essential when it comes to building
          trust, so we are very committed to being as open as we can regarding
          the status of the order. We ensured that all stakeholders responsible
          for delivering our food to our users communicate their status on an
          individual basis, so the user will always know exactly where their
          order stands. Below are a few examples from the Delivery Partner and
          Restaurant communication
        </p>
        <h4>Delivery Partner Communication </h4>
        <Zoom>
        <img src="/zomato/4.png" />
        </Zoom>
       
        <h4>Restaurant Communication</h4>
        <Zoom>
        <img src="/zomato/5.png" />
        </Zoom>
      

        <h3>Creating a modular system for scalability</h3>
        <p>
          All the designs have been created with modularity and scalability in
          mind and have been scaled to all of our LOBs
        </p>
      </div>
    </>
  );
}
