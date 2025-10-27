function mapVector(vector, circle1, circle2) {
    const x = vector[0];
    const y = vector[1];
    const c1_x = circle1[0];
    const c1_y = circle1[1];
    const r1 = circle1[2];
    const c2_x = circle2[0];
    const c2_y = circle2[1];
    const r2 = circle2[2];
    
    const ratio = r2 / r1;
    const new_x = c2_x + (x - c1_x) * ratio;
    const new_y = c2_y + (y - c1_y) * ratio;
    
    return [Math.round(new_x * 100) / 100, Math.round(new_y * 100) / 100];
}