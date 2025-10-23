import sys

def encode_line(line):
    if not line:
        return ""
    
    result = []
    i = 0
    
    while i < len(line):
        # Count consecutive identical characters starting at i
        count = 1
        while i + count < len(line) and line[i] == line[i + count]:
            count += 1
        
        if count >= 2:
            # Encode repeating characters
            char = line[i]
            remaining = count
            while remaining >= 2:
                encode_count = min(remaining, 9)
                result.append(str(encode_count))
                result.append(char)
                remaining -= encode_count
            
            # If there's 1 remaining, treat it as non-repeating
            if remaining == 1:
                result.append('1')
                if char == '1':
                    result.append('11')
                else:
                    result.append(char)
                result.append('1')
            
            i += count
        else:
            # Start collecting non-repeating sequence
            seq = []
            while i < len(line):
                # Check if current position starts a repetition of 2 or more
                next_count = 1
                while i + next_count < len(line) and line[i] == line[i + next_count]:
                    next_count += 1
                
                if next_count >= 2:
                    break
                
                seq.append(line[i])
                i += 1
            
            # Encode the non-repeating sequence
            if seq:
                result.append('1')
                for ch in seq:
                    if ch == '1':
                        result.append('11')
                    else:
                        result.append(ch)
                result.append('1')
    
    return ''.join(result)

for line in sys.stdin:
    line = line.rstrip('\n')
    print(encode_line(line))