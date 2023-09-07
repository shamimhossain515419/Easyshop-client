
const GetCardData = async (email) => {
     const res = await fetch(`https://esayshop-server.vercel.app/addcard/${email}`, {
          cache: 'force-cache'
     })
     return await res.json();
};

export default GetCardData;