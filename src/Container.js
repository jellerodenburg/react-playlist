import React from "react"
import Nav from "./components/Nav"
import InputFields from "./components/InputFields"
import SongList from "./components/SongList"
import About from "./components/About"
import initialSongsData from "./initialSongsData"

class Container extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            songItems: initialSongsData,
            filteredSongItems: initialSongsData,
            filterGenre: "",
            counter: 14,
            newSongTitle: "",
            newSongArtist: "",
            newSongGenre: "",
            newSongRating: "",
            aboutClass: ""
        }
        this.aboutLinkClick = this.aboutLinkClick.bind(this)
        this.addNewItem = this.addNewItem.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.sortSongList = this.sortSongList.bind(this)
        this.handleSelectDisplayGenre = this.handleSelectDisplayGenre.bind(this)
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
        console.log(name)
    }

    log = () => {
        console.log(this.state.filteredSongItems)
        console.log(this.state.songItems)
    }

    handleSelectDisplayGenre(event) {
        const { name, value } = event.target
        if (value == "") {
            this.setState({
                [name]: value
            }, this.setState({
                filteredSongItems: this.state.songItems
            }, this.log))
        } else {
            this.setState({
                [name]: value
            }, this.setState({
                filteredSongItems: this.state.songItems.filter(item => item.genre === value)
            }, this.log))
        }
    }

    sortSongList(property) {
        const sorted = this.state.filteredSongItems.sort((a, b) => {
            return a[property].localeCompare(b[property])
        });
        this.setState({ filteredSongItems: sorted })
    };

    handleDelete(itemId) {
        const updatedSongList = this.state.songItems.filter
            (item => item.id !== itemId);
        this.setState({ songItems: updatedSongList })
    };

    aboutLinkClick() {
        if (this.state.aboutClass === '') {
            this.setState({
                aboutClass: 'visible'
            })
        }
        else {
            this.setState({
                aboutClass: '',
            })
        }
    }

    addNewItem() {
        const newSongId = {
            id: this.state.counter + 1,
        }
        const newSongInput = {
            title: this.state.newSongTitle,
            artist: this.state.newSongArtist,
            genre: this.state.newSongGenre,
            rating: this.state.newSongRating
        }
        const inputIsEmpty = Object.values(newSongInput).some(x => (x === ''));
        if (inputIsEmpty) {
            alert("Please type in Song Title and Artist Name \r\nSelect a Genre and Rating")
        } else {
            this.setState(prevState => ({
                songItems:
                    [
                        ...prevState.songItems,
                        { ...newSongId, ...newSongInput }
                    ]
            }))
            this.setState(prevState => ({
                counter: prevState.counter + 1
            }))
            this.clearInputFields()
        }
    }

    clearInputFields() {
        this.setState({
            newSongTitle: "",
            newSongArtist: "",
            newSongGenre: "",
            newSongRating: ""
        })
    }

    render() {
        return (
            <div className="container">
                <Nav aboutLinkClick={this.aboutLinkClick} />
                <About aboutClass={this.state.aboutClass} />
                <InputFields
                    addNewItem={this.addNewItem}
                    handleChange={this.handleChange}
                    newSongTitle={this.state.newSongTitle}
                    newSongArtist={this.state.newSongArtist}
                    newSongGenre={this.state.newSongGenre}
                    newSongRating={this.state.newSongRating}
                />
                <SongList
                    handleSelectDisplayGenre={this.handleSelectDisplayGenre}
                    andleDelete={this.handleDelete}
                    songItems={this.state.songItems}
                    sortSongList={this.sortSongList}
                    filterGenre={this.filterGenre}
                    filteredSongItems={this.state.filteredSongItems}
                />
            </div >
        )
    }
}

export default Container