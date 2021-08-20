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
            aboutClass: "",
            filteredSongItems: initialSongsData,
            filterGenre: "",
            idCounter: 14,
            lastSort: "descending",
            newSongTitle: "",
            newSongArtist: "",
            newSongGenre: "",
            newSongRating: "",
            songItems: initialSongsData
        }
        this.aboutLinkClick = this.aboutLinkClick.bind(this)
        this.addNewItem = this.addNewItem.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleSelectDisplayGenre = this.handleSelectDisplayGenre.bind(this)
        this.sortSongList = this.sortSongList.bind(this)
    }

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
            id: this.state.idCounter + 1
        }
        const newSongInput = {
            title: this.state.newSongTitle,
            artist: this.state.newSongArtist,
            genre: this.state.newSongGenre,
            rating: this.state.newSongRating
        }
        const someInputIsEmpty = Object.values(newSongInput).some(x => (x === ''));
        if (someInputIsEmpty) {
            alert("Please type in Song Title and Artist Name \r\nSelect a Genre and Rating")
        } else {
            this.setState(prevState => ({
                songItems:
                    [
                        ...prevState.songItems,
                        { ...newSongId, ...newSongInput }
                    ],
                filteredSongItems:
                    [
                        ...prevState.filteredSongItems,
                        { ...newSongId, ...newSongInput }
                    ],
                idCounter: prevState.idCounter + 1
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

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
        console.log(name)
    }

    handleDelete(itemId) {
        const updatedSongList = this.state.songItems.filter
            (item => item.id !== itemId);
        const updatedFilteredSongList = this.state.filteredSongItems.filter
            (item => item.id !== itemId);
        this.setState({
            songItems: updatedSongList,
            filteredSongItems: updatedFilteredSongList
        })
    };

    handleSelectDisplayGenre(event) {
        const { name, value } = event.target
        if (value === "") {
            this.setState({
                [name]: value
            }, this.setState({
                filteredSongItems: this.state.songItems
            }))
        } else {
            this.setState({
                [name]: value
            }, this.setState({
                filteredSongItems: this.state.songItems.filter(item => item.genre === value)
            }))
        }
    }

    sortSongList(property) {
        if (this.state.lastSort === "descending") {
            const sortedAscending = this.state.filteredSongItems.sort((a, b) => {
                return a[property].localeCompare(b[property])
            });
            this.setState({ filteredSongItems: sortedAscending, lastSort: "ascending" })
        } else {
            const sortedDescending = this.state.filteredSongItems.sort((a, b) => {
                return b[property].localeCompare(a[property])
            });
            this.setState({ filteredSongItems: sortedDescending, lastSort: "descending" })
        }
    };


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
                    filterGenre={this.filterGenre}
                    filteredSongItems={this.state.filteredSongItems}
                    handleDelete={this.handleDelete}
                    handleSelectDisplayGenre={this.handleSelectDisplayGenre}
                    songItems={this.state.songItems}
                    sortSongList={this.sortSongList}
                />
            </div>
        )
    }
}

export default Container