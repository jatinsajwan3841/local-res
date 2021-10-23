import React from 'react'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import Avatar from '@material-ui/core/Avatar'
import Chip from '@material-ui/core/Chip'

const Favourite = ({ saved, favShow, favDel }) => {
    return (
        <div>
            <Chip avatar={<BookmarkBorderIcon />} label={'Saved :'} />
            <ul>
                {saved.length === 0
                    ? 'None, try saving for faster visits! ╰(*°▽°*)╯'
                    : saved.map((v, i) => (
                          <li key={i}>
                              <Chip
                                  avatar={<Avatar>{v.name[0]}</Avatar>}
                                  label={v.name}
                                  variant="outlined"
                                  style={{ marginBottom: 8 }}
                                  onClick={() => favShow(i)}
                                  onDelete={() => favDel(i)}
                              />
                          </li>
                      ))}
            </ul>
        </div>
    )
}
export default Favourite
