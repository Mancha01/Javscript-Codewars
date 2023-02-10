#Run live server:
hit 'live-server' in the terminal to launch

#Add breakpoint and launch debug session

#If it doesn't work try and refollow this video:
https://www.youtube.com/watch?v=68wO-sl5vXg&t=192s

#Not sure what fixed it the last time I had an issue with this but one accidental possible fix is to
launch the live-server, add a breakpoint to the file, launch the debug session, make a change to the
file while the debug session is still running and save file with debug session running.

#Another thing I did which could have fixed it potentially is that for one of the files that was refusing to debug, when I called the name of the function and passed in some arguments for the parameters as expected, it then was able to bind the breakpoint. I think this is the case because I tested it and this appeared to be the solution because when I removed the function call the breakpoint wasn't binded but when I added it the breakpoint was able to bind. I have confirmed this to be the solution.

#Sometimes it could be that you need to reload the live server.

#Article on debugging React:
https://dev.to/colocodes/how-to-debug-a-react-app-51l4
