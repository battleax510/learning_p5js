#
#!/bin/bash

# Check if FFmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "FFmpeg is not installed. Please install FFmpeg and try again."
    exit 1
fi

# Check if input file is provided
if [ -z "$1" ]; then
    echo "Usage: $0 <input_file> <output_file>"
    exit 1
fi

# Check if output file is provided
if [ -z "$2" ]; then
    echo "Usage: $0 <input_file> <output_file>"
    exit 1
fi

input_file="$1"
output_file="$2"

# Trim the audio file
ffmpeg -i "$input_file" -ss $3 -t $4 -acodec copy "$output_file"

echo "Trimmed audio file created: $output_file"
