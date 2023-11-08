import React from "react";

import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

const Recommendation = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(
        `/${mediaType}/${id}/recommendations`
    );

    return (
        <Carousel
            title="Recommendations"
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
    );
};

export default Recommendation;


// import React from "react";

// import Carousel from "../../../components/carousel/Carousel";
// import useFetch from "../../../hooks/useFetch";

// const Recommendation = ({ mediaType, id }) => {
//     const { data, loading, error } = useFetch(
//         `/${mediaType}/${id}/recommendations`
//     );

//     return (
//         <div>
//             {data && data.results && data.results.length > 0 ? (
//                 <Carousel
//                     title="Recommendations"
//                     data={data.results}
//                     loading={loading}
//                     endpoint={mediaType}
//                 />
//             ) : (
//                 <div>No recommended videos found for this {mediaType}.</div>
//             )}
//         </div>
//     );
// };

// export default Recommendation;
