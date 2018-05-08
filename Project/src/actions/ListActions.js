import {firebaseRef} from '../firebase/firebase'

import {
  UPDATE_LIST_SUCCESS
} from './types'

export const fetchList = (index) => {
  return (dispatch) => {
    const arrayToFilter = []
    var currentUsersLatitude
    firebaseRef.database().ref().child('users')
    .on('value', snapshot => {
      let snap = snapshot.val()
      // Get acces to the keys in the object i got from firebase
      let keys = Object.keys(snap)
      //  iterate the keys and put them in an User object
      for (var i = 0; i < keys.length; i++) {
        let k = keys[i]
        let key = k
        let name = snap[k].profile.name
        let age = snap[k].profile.age
        let status = snap[k].profile.status
        let profile_picture = snap[k].profile.profile_picture
        let prop = snap[k].profile.prop
        let value = snap[k].profile.value
        let gender = snap[k].profile.gender
        let latitude = snap[k].profile.latitude
        let longitude = snap[k].profile.longitude

        let users = { key: '', name: '', age: '', status: Boolean, profile_picture: '', prop: '', value: '', gender: '', latitude: '', longitude: ''}
        users.key = key
        users.name = name
        users.age = age
        users.status = status
        users.profile_picture = profile_picture
        users.prop = prop
        users.value = value
        users.gender = gender
        users.latitude = Math.floor(latitude)
        users.longitude = Math.floor(longitude)

        // adding the user object to an array
        arrayToFilter.push(users)
      }

      // Get current users latitude to compare with all users latidude
      let userId = firebaseRef.auth().currentUser.uid
      firebaseRef.database().ref(`/users/${userId}`).once('value').then(function (snapshot) {
        let snap = snapshot.val()
        // Get acces to the keys in the object i got from firebase
        let keys = Object.keys(snap)
        //  iterate the keys and put them in an User object
        for (var i = 0; i < keys.length; i++) {
          let k = keys[i]
          currentUsersLatitude = snap[k].latitude
        }

      // filter and creates a new array with users depending on thr conditions
        if (index === 0) {
          let arr = arrayToFilter.filter(child => child.status === true && Math.floor(currentUsersLatitude) === child.latitude)
          dispatch({ type: UPDATE_LIST_SUCCESS, payload: arr })
        } else if (index === 1) {
          let arr = arrayToFilter.filter(child => child.status === true && Math.floor(currentUsersLatitude) === child.latitude && child.gender === 'female')
          dispatch({ type: UPDATE_LIST_SUCCESS, payload: arr })
        } else if (index === 2) {
          let arr = arrayToFilter.filter(child => child.status === true && Math.floor(currentUsersLatitude) === child.latitude && child.gender === 'male')
          dispatch({ type: UPDATE_LIST_SUCCESS, payload: arr })
        }
      })
    })
  }
}
