FORMAT: 1A

# Chats

    Chats is a testing API, which allows message exchange between github users.

# Group Uses

    Resources related to users in the API.

## User Collection [/users]

### List all users, except logged user [GET]

    + Response 200 (application/json)
        + Headers
            user: "5d52fcb29b2d5c448c3e8e91"

        + Body
            [
                {
                    "connectedUsers": [
                    "5d52fcdf9b2d5c448c3e8e92",
                    "5d52fd7994b71a450a9297e5"
                    ],
                    "activeChats": [
                    "5d52fd129b2d5c448c3e8e93",
                    "5d52fd8194b71a450a9297e6"
                    ],
                    "_id": "5d52fcb29b2d5c448c3e8e91",
                    "name": "Rennan Douglas",
                    "user": "RennanD",
                    "avatar": "https://avatars1.githubusercontent.com/u/15038553?v=4",
                    "createdAt": "2019-08-13T18:08:50.070Z",
                    "updatedAt": "2019-08-13T18:12:17.523Z",
                    "__v": 2
                },
                {
                    "connectedUsers": [
                    "5d52fcdf9b2d5c448c3e8e92",
                    "5d52fd7994b71a450a9297e5"
                    ],
                    "activeChats": [
                    "5d52fd129b2d5c448c3e8e93",
                    "5d52fd8194b71a450a9297e6"
                    ],
                    "_id": "5d52fcb29b2d5c448c3e8e92",
                    "name": "Rennan",
                    "user": "RennanD",
                    "avatar": "https://avatars1.githubusercontent.com/u/15038553?v=4",
                    "createdAt": "2019-08-13T18:08:50.070Z",
                    "updatedAt": "2019-08-13T18:12:17.523Z",
                    "__v": 2
                },
            ]
### Add new user in aplication [POST]
    
    + Response 201 (application/json)
        {
            "connectedUsers": [],
            "activeChats": [],
            "_id": "5d52fcb29b2d5c448c3e8e91",
            "name": "Rennan Douglas",
            "user": "RennanD",
            "avatar": "https://avatars1.githubusercontent.com/u/15038553?v=4",
            "createdAt": "2019-08-13T18:14:52.451Z",
            "updatedAt": "2019-08-13T18:14:52.451Z",
            "__v": 0
        }

# Group Chats 

    Resources related to chats in the API.

## Chats Collection [/chats]

### List all chats the logged in user is included [GET]

    + Response 200 (application/json)
        + Headers
            user: "5d52fcb29b2d5c448c3e8e91"
        + Body
        
        [
            {
                "users": [
                {
                    "connectedUsers": [
                    "5d5597e3938a14519928ad86",
                    "5d5598be938a14519928ad88"
                    ],
                    "activeChats": [
                    "5d55980f938a14519928ad87",
                    "5d5598cb938a14519928ad89"
                    ],
                    "_id": "5d5597d8938a14519928ad85",
                    "name": "Rennan Douglas",
                    "user": "RennanD",
                    "avatar": "https://avatars1.githubusercontent.com/u/15038553?v=4",
                    "createdAt": "2019-08-15T17:35:20.648Z",
                    "updatedAt": "2019-08-15T17:39:23.014Z",
                    "__v": 2
                },
                {
                    "connectedUsers": [
                    "5d5597d8938a14519928ad85"
                    ],
                    "activeChats": [
                    "5d55980f938a14519928ad87"
                    ],
                    "_id": "5d5597e3938a14519928ad86",
                    "name": "Awesome User",
                    "user": "awesomeuser",
                    "avatar": "https://avatars0.githubusercontent.com/u/avatar",
                    "createdAt": "2019-08-15T17:35:31.808Z",
                    "updatedAt": "2019-08-15T17:36:16.462Z",
                    "__v": 1
                }
                ],
                "messeges": [],
                "_id": "5d55980f938a14519928ad87",
                "createdAt": "2019-08-15T17:36:15.322Z",
                "updatedAt": "2019-08-15T17:36:16.461Z",
                "__v": 1
            },
        ]

### Show expecific chat [GET] [/chats/:chatId]
    
    + Response 201 (application/json)
    + Headers
            user: "5d52fcb29b2d5c448c3e8e91"
    + Body
        {
            "users": [
                "5d52fe1c94b71a450a9297e9",
                "5d52fd7994b71a450a9297e5"
            ],
            "messeges": [
                {
                "_id": "5d533186c3af0b681b686f43",
                "id": "5d52fcb29b2d5c448c3e8e91",
                "name": "Rennan Douglas",
                "avatar": "https://avatars1.githubusercontent.com/u/15038553?v=4",
                "content": "oi",
                "createdAt": "2019-08-13T21:54:14.872Z",
                "updatedAt": "2019-08-13T21:54:14.872Z",
                "__v": 0
                }
            ],
            "_id": "5d5318c4183ace509714ca8e",
            "createdAt": "2019-08-13T20:08:36.423Z",
            "updatedAt": "2019-08-13T21:54:15.268Z",
            "__v": 2
        }

### Store new chat between logged user and targget user [POST] [/chats/:targget]
    
    + Response 201 (application/json)
    + Headers
            user: "5d52fcb29b2d5c448c3e8e91"
    + Body
        {
            "users": [
                "5d5597d8938a14519928ad85",
                "5d5598be938a14519928ad88"
            ],
            "messeges": [],
            "userTargget": [],
            "_id": "5d5598cb938a14519928ad89",
            "createdAt": "2019-08-15T17:39:23.011Z",
            "updatedAt": "2019-08-15T17:39:23.014Z",
            "__v": 1
        }

### Store a new messege in the chat [POST] [/chats/:chatId/messege]
    
    + Response 201 (application/json)
    + Headers
            user: "5d52fcb29b2d5c448c3e8e91"
    + Body
        {
            "users": [
                "5d52fe1c94b71a450a9297e9",
                "5d52fd7994b71a450a9297e5"
            ],
            "messeges": [
                {
                "_id": "5d533186c3af0b681b686f43",
                "id": "5d52fd7994b71a450a9297e5",
                "name": "Rennan Douglas",
                "avatar": "https://avatars1.githubusercontent.com/u/15038553?v=4",
                "content": "oi",
                "createdAt": "2019-08-13T21:54:14.872Z",
                "updatedAt": "2019-08-13T21:54:14.872Z",
                "__v": 0
                }
            ],
            "_id": "5d5318c4183ace509714ca8e",
            "createdAt": "2019-08-13T20:08:36.423Z",
            "updatedAt": "2019-08-13T21:54:15.268Z",
            "__v": 2
        }