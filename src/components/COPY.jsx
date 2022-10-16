// =================================================
// class ImageGallery extends Component {
//   state = {
//     images: [],
//     page: 1,
//     loading: false,
//     error: null,
//   };

//   componentDidUpdate = async (prevProps, prevState) => {
//     const { request } = this.props;
//     const { page, images } = this.state;

//     if (prevProps.request !== request) {
//       this.setState({ images: [], page: 1 });
//     }

//     if (prevProps.request !== request || prevState.page !== page) {
//       try {
//         this.setState({ loading: true });
//         const imgApi = await fetchImg(request, page);

//         this.setState({ images: [...images, ...imgApi] });
//       } catch (error) {
//         this.setState({ error });
//       } finally {
//         this.setState({ loading: false });
//       }
//     }
//   };

//   loadMore = () => {
//     this.setState(prevState => ({ page: prevState.page + 1 }));
//   };

//   render() {
//     const { images, loading, error } = this.state;

//     return (
//       <div>
//         <ImageGalleryList>
//           {images.map(({ id, webformatURL, largeImageURL }) => (
//             <ImageGalleryItem
//               key={id}
//               webformatURL={webformatURL}
//               largeImageURL={largeImageURL}
//             />
//           ))}
//         </ImageGalleryList>
//         {error && <p>Whoops, something went wrong</p>}
//         {images.length !== 0 && images.length >= 12 && images.length < 500 && (
//           <Button onClickLoadMore={this.loadMore} />
//         )}
//         {loading && <Loader />}
//       </div>
//     );
//   }
// }

// export default ImageGallery;
// ================================================================
// export default function ImageGallery(request) {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [images, setImages] = useState([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (searchQuery === '') {
//       return;
//     }

//     async function imgApi(request) {
//       try {
//         setLoading(true);
//         const updatedImages = await fetchImg(request, page);
//         setImages(prevImages => [...prevImages, ...updatedImages]);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     }
//     imgApi();
//   }, [searchQuery, page]);

//   console.log(request);
// ===============================================================
