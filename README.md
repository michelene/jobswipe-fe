# jobswipe_fe: Front end for JobSwipe app

## Links

- [Back End (Deployed)]()
- [Back End (Local)]()
- [Back End (Source code)]()
- [Front End (Deployed)]()
- [Front End (Local)]()

## User Auth

- Log in:

```
  curl -X POST -d "username=admin&password=password123" $API_URI/api-token-auth/
```

or

```
  curl -X POST -H "Content-Type: application/json" -d '{"username":"username","password":"password"}' $API_URI/api-token-auth/
```

This will cause a JWT to be returned in the response body, e.g.:

```
{
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6InN1cGVyMyIsImV4cCI6MTU4Mzc5MTcyMCwiZW1haWwiOiJzQHMuY29tIn0.7pZRXd0OygANuf5s1sE6gDG5XsBdbkibLaT_NhRD0D0"
}
```

- Then use this in all subsequent requests to protected areas:

```
curl -H "Authorization: JWT <your_token>" $API_URI/protected-url/`
```
